# JOIN_RESPONSE_CODE

## Summary
Response from host when joining a session

## Values
* RESPONSE_ACCEPT: Join successful
* RESPONSE_DENY_UNKNOWN: Unknown - Indicates bug - Use Generic Error
* RESPONSE_DENY_WRONG_SESSION: Different session - Indicates bug - Use Generic Error
* RESPONSE_DENY_NOT_HOSTING: User not hosting - (might have left and come back) - Use Generic Error
* RESPONSE_DENY_NOT_READY: Session still starting - would occur if someone hosted and immediately sent an invite.
* RESPONSE_DENY_BLACKLISTED: We start straight away so this should be very difficult in practice. Use Generic Error. Gamer is blacklisted from session
* RESPONSE_DENY_INVALID_REQUEST_DATA: Indicates bug - Use Generic Error
* RESPONSE_DENY_INCOMPATIBLE_ASSETS: Different assets
* RESPONSE_DENY_SESSION_FULL: Session is full
* RESPONSE_DENY_GROUP_FULL: Selected group is full
* RESPONSE_DENY_WRONG_VERSION: Different session - Dev only - Use Generic Error
* RESPONSE_DENY_NOT_VISIBLE: Session not visible for Matchmaking - Won't happen for Invites (would be a bug)
* RESPONSE_DENY_BLOCKING: Use Generic Error
* RESPONSE_DENY_AIM_PREFERENCE: for instance, might be to block players joining during a race). Different aim settings
* RESPONSE_DENY_CHEATER: Cheater setting different (either local or session is flagged as cheater)
* RESPONSE_DENY_TIMEOUT: Different time out - Dev only - Use Generic Error
* RESPONSE_DENY_DATA_HASH: Different data hash - Indicates cloud assets different
* RESPONSE_DENY_CREW_LIMIT: Too many crews
* RESPONSE_DENY_POOL_NORMAL: Pool we tried to join is NORMAL. Player must be bad sport or cheater
* RESPONSE_DENY_POOL_BAD_SPORT: Pool we tried to join is BAD SPORT. Player must be normal or cheater
* RESPONSE_DENY_POOL_CHEATER: Pool we tried to join is CHEATER. Player must be normal or bad sport
* RESPONSE_DENY_NOT_JOINABLE: Session no longer exists
* RESPONSE_DENY_PRIVATE_ONLY: Session has only private slots. Player was not invited.
* RESPONSE_DENY_DIFFERENT_BUILD: Different build type - Dev Only
* RESPONSE_DENY_DIFFERENT_PORT: Different socket port - Dev Only
* RESPONSE_DENY_DIFFERENT_CONTENT_SETTING: Different content setting (online vs. offline)
* RESPONSE_DENY_NOT_FRIEND: A player who is not a friend of the host is trying to join a friends-only session
* RESPONSE_DENY_REPUTATION: Reputation of players is different (One is bad, other is good). Xbox One only.
* RESPONSE_DENY_FAILED_TO_ESTABLISH: Couldn't contact the session. It may no longer exist
* RESPONSE_DENY_PREMIUM: Premium session, no access
* RESPONSE_SOLO: Solo session
* RESPONSE_DENY_ADMIN_BLOCKED: Admin blocked due to no notification
* RESPONSE_DENY_TOO_MANY_BOSSES: Too many bosses in the session

## Notes
Comments next to the types that script might consider relaying to the user on failing to join an invite session.
For others, check with code or display general message