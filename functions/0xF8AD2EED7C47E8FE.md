# AUDIO::BLOCK_ALL_SPEECH_FROM_PED

## Parameters
* **PED_INDEX** pedIndex
* **BOOL** shouldBlock
* **BOOL** suppressOutgoingNetworkSpeech = true

## Description
<!-- AUTOGENERATED: Remove this line before editing -->
Blocks *allspeech playing on the given ped, including speech triggered by script commands such as PLAY_PED_AMBIENT_SPEECH_WITH_VOICE_NATIVE
The flag itself is not synced, it must be called on each machine that wishes to suppress the speech.
The SuppressOutgoingNetworkSpeech flag can be set to false if you want speech triggered locally through PLAY_AMBIENT_SPEECH calls to still be audible
on remote machines, even though it was blocked on the local one.