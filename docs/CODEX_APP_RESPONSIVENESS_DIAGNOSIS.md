# Codex App Responsiveness Diagnosis

## Date

2026-05-02

## Symptom

Codex desktop app frequently shows `Codex (응답 없음)` during app launch, thread resume, and repeated work requests.

## Evidence

- Windows Application Event Log recorded an actual Codex hang:
  - Event ID: `1002`
  - Provider: `Application Hang`
  - Process: `Codex.exe`
  - Version: `2345.0.0.0`
- Codex local log recorded expensive thread resume:
  - `method=thread/resume`
  - `durationMs=83957`
  - `turnCount=487`
- Codex app state snapshot for the same session:
  - `turn_count_total_loaded=492`
  - `item_count_total_loaded=17633`
  - `max_turns_in_single_thread=487`
  - `renderer_process_working_set_kb=648124`
  - `app_server_stdio_bytes_read_total=112763179`
- System resource check during diagnosis did not show global pressure:
  - available memory around 7GB
  - total CPU around 15-20%
  - disk time around 1-2%

## Confirmed Cause

The direct cause is the oversized active Codex thread. The app is loading and rendering hundreds of turns and more than 17,000 items when the thread is resumed. This explains why the freeze appears at app start, when reopening the current project thread, and during subsequent requests in the same thread.

Workspace size is a secondary risk only. Ignored workspace directories contained more than 800MB of generated or temporary files, but the strongest evidence points to thread resume/render cost rather than normal CPU, disk, or memory exhaustion.

## Mitigation Applied

- Updated `docs/SESSION_HANDOFF.md` with the current project state so future work can resume from a fresh Codex thread using `ERTY`.
- Kept the diagnosis evidence local and human-readable in this document.

## Operating Rule Going Forward

- Do not keep high-churn implementation work in a single long Codex thread.
- When a thread approaches roughly 100 turns, create a fresh thread and send `ERTY` as the first message.
- Keep `docs/SESSION_HANDOFF.md` current before switching threads.
- Keep generated files in ignored directories, and periodically move stale `tmp`, `output`, `.playwright-cli`, `.wrangler`, and `test-results` outside the workspace if Codex UI starts slowing down.

## Not Fixed By Code

This is not a website bug. It is a desktop app responsiveness issue triggered by the size of the current conversation state. The sustainable fix is to stop using this oversized thread for new work and resume from a fresh thread using the handoff document.
