# Mind Garden bilingual copy audit — proposals only

No application wording was changed during this audit. Prior functional fixes remain separate.

## Coverage and limits

Static scan of all 60 release script entries, the bilingual catalogue (1532 pairs), and source checks of shared game setup, help, account, menu and multiplayer text. Third-party code and generated bundles are not editorial sources. Dynamic game questions, interpolated descriptions and every rendered state still require contextual review; this is not a claim that all runtime wording or translations have been certified.

57 catalogue entries exceed 24 English words or 55 Chinese characters. These are review candidates, not automatic failures: reference help and necessary warnings may be longer.

## Editorial decisions

- Remove descriptions that repeat headings, buttons, empty states or visible results. Do not replace deleted prose with equally obvious short prose.
- English: direct verbs and concrete nouns. Remove filler such as yet, simply, just, please and you can where meaning is unchanged.
- Chinese: use natural concise instructions rather than literal English sentence structure. Omit unnecessary 您可以、请、尚未 and repeated subjects. Preserve conditions and negation.
- Keep save failures, unsaved progress, deletion scope, unencrypted downloads, sharing and consent implications visible at the relevant action.
- One game rule block. Put only changed level constraints beneath it; remove generic difficulty marketing and repeated game descriptions.
- Retain accessible names on icon-only buttons. Shortening visible copy must not remove screen-reader labels.
- Avoid blanket replacement of all yet: not yet valid is a time condition, not filler.

## Findings by area

| Area | Finding | Proposed treatment |
|---|---|---|
| Home and navigation | Labels often repeat nearby controls; old About text still says primary cards always remain visible. | Remove repetition; correct visibility documentation. |
| Games and preparation | Shared setup combines catalogue descriptions, previews and generic mode explanations. | Show the rule once, then only level-specific constraints. |
| Multiplayer | Rankings repeat title and empty-state meaning; waiting copy combines unrelated stages. | Use state-specific status; move reference detail to help. |
| Accounts and saved copies | Long overview explains signup, player copying, sync and device storage together. | Explain each at its own step; retain irreversible/security warnings. |
| Scenery and audio | Selection and playback directions repeat obvious controls. | Keep formats, limits and storage implications; omit control narration. |
| Progress and scores | Group, individual and health distinctions bundled together. | Concise labels; scoring definitions in info, non-medical context retained in About. |
| About and Quick guide | Long changelog paragraphs; stale top/bottom game-control positions in v4.js; conflicting card visibility statements in dashboard.js. | Rewrite by current task, correct outdated behaviour and keep detailed reference expandable. |
| Chinese | Several long descriptions closely follow English clause order. | Rewrite for natural Chinese; standardise 关卡 (level), 回合 (round), 玩家 (player), 账户 (account), 房间 (room). |

## Bilingual copy previews

| Context | English | 简体中文 | Decision |
|---|---|---|---|
| Online rankings: empty | No completed games | 无已完成游戏 | Remove introductory paragraph; storage/access details in info. |
| Open rooms: empty | No open rooms | 无开放房间 | The Create room button needs no repeated explanation. |
| Passkeys: empty | No saved passkeys | 无已保存的通行密钥 | Remove yet/尚未. |
| Device copies: empty | No account copies | 无账户副本 | Do not imply that ordinary local players are missing. |
| Lobby entry | Enter the lobby to receive invitations. | 进入大厅以接收邀请。 | Keep account/lobby distinction in contextual help; show name/score sharing before joining. |
| Waiting room | Waiting for players | 等待玩家加入 | Keep launch restrictions near Prepare round, not in every status. |
| Bingo waiting | Waiting for everyone to begin | 等待所有玩家开始 | Keep shared-start rule; omit explanation of what the host cannot do. |
| Rankings: populated | [Remove introductory description] | [删除说明] | Title, room list and scores explain the screen. |
| Scenery chooser | [Remove introductory description] | [删除说明] | Scenery names and previews suffice. |
| Scenery rotation | Pauses outside the garden. | 离开花园时暂停。 | Retain behaviour the control does not explain. |
| Contact | [Remove introductory description] | [删除说明] | The form and Submit button already explain the action. |
| Text size | [Remove introductory description] | [删除说明] | Keep labelled controls and reset action. |
| Game setup: dots | Connect checkpoints in order. Do not cross or reuse squares. | 按顺序连接检查点，不可交叉或重复经过方格。 | One rule block; level-specific constraints only when applicable. |
| Game setup: matching | Match related objects. | 配对相关物品。 | Examples belong in help. |
| Game hint | [Remove generic preamble] | [删除通用开场说明] | Show only the useful rule or hint. |
| Account overview | Save players and progress across devices. | 跨设备保存玩家与进度。 | Player selection, copying and account boundaries explained where used. |
| Sync status | Saved | 已保存 | Use only after confirmed success. |
| Sync pending | Waiting to sync | 等待同步 | Never shorten this to Saved. |
| Video upload | Up to 3 videos · MP4/WebM · 100 MB each | 最多3个视频 · MP4/WebM · 每个100 MB | Keep local-storage and clearing-data warning near upload; playback instructions in help. |
| Photo upload | JPG, PNG or WebP · Up to 25 MB | JPG、PNG或WebP · 最大25 MB | Keep local-storage and clearing-data warning near upload. |
| Backup import | Import JSON as a separate player. | 将JSON导入为独立玩家。 | Keep media/session exclusions in info; never imply merging. |
| End round warning | End round? Unfinished players receive no points. | 结束本轮？未完成的玩家不得分。 | Keep visible before confirmation. |
| Unfinished game exit | Exit? This game will not be saved. | 退出？本局游戏不会保存。 | Keep visible; retain established action icons. |
| Password download | This file contains your password. It is not encrypted. | 文件含密码，未加密。 | Keep visible before download; never hide in info. |

## Long-entry inventory

Each entry below requires contextual shortening, splitting, removal or retention. Source locations aid review; a phrase may appear in more than one module.

### 1. account-sync.js:103

The browser controls password-manager prompts. Save Password to Device downloads your account name, password and any recovery key shown here in one unencrypted file. You can also save the recovery key separately. Device sign-in is a separate optional setup using Face ID, fingerprint or your device PIN. A passkey stays with your device or passkey provider; it is not included in these downloads.

密码管理器提示由浏览器控制。保存密码到设备会将账户名、密码及此处显示的恢复密钥下载为一个未加密文件，也可单独保存恢复密钥。设备登录可另行选择设置，使用面容识别、指纹或设备PIN。通行密钥由设备或提供商保管，不包含在这些下载文件中。

### 2. account-sync.js:112

For your own customised profile, we recommend an optional personal account with device sign-in. An account is online storage for selected players and their scores, progress and preferences. Sign in on another device to retrieve them. A person, family or facilitator can save several players in one account; each player does not need an account. Playing or changing a player name needs no account. Renaming keeps that player’s records. Copying players requires your selection and keeps the device originals. Separate accounts keep separate player collections; sign out before switching.

建议为个人定制资料使用可选个人账户，并设置设备登录。账户提供在线存储，用于保存选定玩家的成绩、进度和偏好。可在另一台设备登录读取。个人、家庭或带领者均可在一个账户保存多位玩家，玩家无需各自创建账户。游玩或修改玩家名称无需账户；修改名称会保留该玩家记录。只有您选中的玩家会被复制，设备原始资料会保留。不同账户的玩家资料独立保存，切换前请先退出登录。

### 3. commercial-games.js:57

Use only photos you have permission to use. Add 3–6 images and their names. Photos stay in this tab’s memory and are cleared when you leave; nothing is uploaded.

请仅使用获得许可的照片。添加3至6张图片及名称。照片只保留在当前页面内存，离开后清除，不会上传。

### 4. dashboard.js:105

Select Choose or add a player below. Give each person their own local player so their progress and preferences stay separate. A nickname is enough.

点击下方“选择或添加玩家”。为每个人建立独立的本地玩家，以分别保存进度与偏好设置。使用昵称即可。

### 5. dashboard.js:109

After playing, use ☰ → Account settings → Saved data & backup → Player backup & import to download a JSON backup before moving devices or clearing browser data.

游戏后，可在“☰ → 账户设置 → 保存资料与备份 → 玩家备份与导入”中下载JSON备份。更换设备或清除浏览器数据前，请先备份。

### 6. dashboard.js:112

Players’ Progress summarises weekly progress for the loaded players. Signed in, it shows the account’s players; signed out, it shows this device’s players. It does not manage accounts. Open Leaderboard to compare games played and best times. Online room rankings are separate.

玩家进度概览已载入玩家的每周进度。登录后显示账户玩家；未登录时显示此设备玩家。它不管理账户。打开排行榜可比较已玩局数及最佳用时；在线房间排名另列。

### 7. dashboard.js:113

Yes. Sign in to your personal account, then choose your player if the account contains several. The profile restores appearance, text size, language, sound, scenery, home cards, chosen games and each game’s saved difficulty. Without an account, selecting the same player in this browser restores its local preferences. Renaming keeps the same profile. Personal photo, video and music files do not transfer to another device.

会。登录个人账户；若账户有多位玩家，再选择自己的玩家。资料会恢复外观、字号、语言、声音、景色、主页卡片、所选游戏及各游戏已存难度。无需账户，在同一浏览器选择原玩家也会恢复本地偏好。修改名称仍保留同一份资料。个人照片、视频和音乐文件不会传至其他设备。

### 8. dashboard.js:114

Built-in scenery stays on the same place when switching light and dark mode. All eighteen sceneries, including the ten heavenly palaces, use matching daytime and nighttime images. Scenery arrows select a place for both modes. The larger, bold scenery name has a contrasting background in both appearances. Personal photos remain separate uploads for each appearance.

切换浅色与深色模式时，内置景色保持同一地点。全部十八处景色，包括十处天宫，均使用对应的日景与夜景。背景箭头会为两种模式选择同一地点。景色名称使用较大的粗体字，并在两种外观下配以对比鲜明的底色。个人照片仍按外观分别上传。

### 9. dashboard.js:115

Balanced now uses the full 1–15 challenge scale instead of repeating ten settings. Later levels add rules such as picture-to-word pairs, reverse recall, shopping-list updates, route checkpoints and meaning questions. Some board sizes repeat for consolidation. Gentle deliberately keeps a smaller difficulty range with fresh content. Read the level preview before starting; practice does not save a score.

适中模式现在使用完整的1至15级挑战，不再重复十种设置。较高关卡加入图片与词语配对、倒序回忆、购物清单更新、路径检查点及含义理解等规则。部分棋盘大小会重复以巩固技能。轻松模式保留较小的难度范围，并更换内容。开始前请阅读关卡说明，练习不保存分数。

### 10. dashboard.js:116

No. Next level, Replay and Easier level start directly with saved choices. Open Settings (gear) on the result screen to adjust settings or choose Easier level. The settings screen hides the previous board and scenery. Move & Remember also continues to the next level with your chosen movements. Story questions only refer to events shown in the story. Boards adapt to the viewport; long content remains scrollable on small screens or with enlarged text.

不需要。“下一关”、“重玩本关”和“尝试较轻松关卡”会直接使用已保存的设置。需要调整或选择较轻松关卡时，请打开成绩页的“选项”。设置画面会隐藏上一局棋盘与背景。“动一动，记一记”也会沿用所选动作进入下一关。故事问题只会涉及故事中已展示的事件。游戏板会适应屏幕；小屏幕或放大文字时，较长内容仍可滚动查看。

### 11. dashboard.js:117

New players see home cards. Menu → Customise my home controls secondary cards. Play today’s games and Browse all games remain visible. Back to games restores cards hidden with the navbar toggle as well as leaving the scenery view. Individually hidden cards keep their Customise my home settings.

新玩家会看到主页卡片。菜单 → 定制我的主页控制次要卡片。开始今日游戏和浏览所有游戏保持可见。“返回游戏”会退出景色视图，并恢复被导航栏开关隐藏的卡片。单独隐藏的卡片仍遵循“定制我的主页”设置。

### 12. dashboard.js:118

Choose a short session, try an unscored practice round, pause, or replay with fresh content. Results offer the same level, a harder or easier level where available, and Take a break. Answer timers are optional; memory viewing time is chosen separately. Move & Remember increases memory variety and sequence length without increasing movement speed. Garden Pets has no scores, timers or care penalties.

可选择短时游戏、尝试不计分练习、暂停，或用新内容重玩。结果页提供重玩、适用时的较难或较轻松关卡，以及休息选项。答题计时可选，记忆观看时间单独设置。“动一动 · 记一记”增加记忆变化与序列长度，不加快动作速度。花园宠物不设分数、计时或照顾惩罚。

### 13. dashboard.js:119

In Everyday Life and the new activity previews, ☰ opens the game menu with Resume and Leave; Pause offers Resume without leaving. Skip moves past an unanswered question without credit. Next continues after an answer or feedback. Available controls vary by activity.

在日常生活与新活动预览中，☰打开游戏菜单，可继续或离开；暂停可继续而无需退出。跳过会略过未回答的问题，不得分；下一题用于回答或反馈后继续。各活动提供的控件可能不同。

### 14. dashboard.js:120

Choose 1–20 rounds before creating a room; the default is 3. The host prepares each round, then each player presses Begin. Quiz questions and timers wait for Begin; matching pairs uses its timed preview. Bingo waits for every remaining player before showing pictures or allowing calls. The final planned round ends the session automatically. Between rounds the host can choose Finish session early. End current round marks unfinished players as not finished, with no points; Cancel game & close room stops the whole session. Completed scores remain saved.

创建房间前选择1至20轮，默认为3轮。房主准备每一轮后，各玩家点击开始。问答题目及计时会等待点击开始；配对游戏使用限时预览。宾果会等待所有仍参与的玩家准备好，才显示或叫出图片。计划的最后一轮完成后会自动结束。回合之间，房主可选择结束本次游戏。“结束本轮”会把未完成玩家标为未完成，本轮不得分；“取消游戏并关闭房间”会停止整场游戏。已完成成绩仍会保留。

### 15. dashboard.js:121

Enter Play Together’s online lobby once on each device; account sign-in alone does not connect it. While online with this page active, room codes appear automatically above menus and popups, including when you are in another room. Invitations do not switch rooms automatically. A guest must leave the current room; a host must finish or cancel it before joining another. Invitations are in-app notices, not device push notifications. Background or suspended browser tabs may deliver them only when you return.

每台设备须先进入“一起玩”的在线大厅；仅登录账户不会连接大厅。保持在线并使用此页面时，房间码会自动显示在菜单和弹窗上方，即使身处其他房间也可收到。邀请不会自动切换房间。客人须先退出当前房间；房主须先结束或取消房间，才能加入另一个。邀请属于应用内提示，并非设备推送通知。后台或暂停的浏览器页面可能要在返回时才收到提示。

### 16. dashboard.js:122

Back to garden · stay joined only hides the multiplayer screen and keeps your room membership. Your timer continues if you have already begun. Leave this room ends only your participation. Finish session and Cancel game & close room release everyone in the room but keep them online in the lobby. Go offline stops lobby updates and invitations on this device; leave or finish your room first. It does not erase saved scores.

“返回花园 · 保留参与”只隐藏多人游戏画面，保留房间成员身份。若已点击开始，计时会继续。“退出此房间”只结束你自己的参与。“结束本次游戏”及“取消游戏并关闭房间”会释放所有房间成员，但仍保留在线大厅状态。“退出在线大厅”会停止此设备的大厅更新与邀请；请先退出或结束房间。已保存成绩不会删除。

### 17. dashboard.js:124

Cards start face down. Press Begin to reveal every picture for 5 seconds with 6 pairs, or 8 seconds with 10 pairs. The cards close automatically, then your matching timer starts. Tap each card once. After a mismatch, tap another card immediately or wait for the two cards to close. Leaving and resuming does not restart the preview. Leave this room returns you to the lobby, where you can enter another room code; the other players can continue. Hosts must finish or cancel their room before joining another.

卡片最初朝下。点击“开始”后，6对卡片会显示5秒，10对卡片会显示8秒。之后自动翻回，并开始配对计时。每张卡片点击一次即可。配错后可立即点击另一张，或等待两张卡片自动翻回。返回游戏不会重新开始预览。点击“退出此房间”会返回大厅，可输入其他房间码，其他玩家可以继续。房主须先结束或取消自己的房间，才能加入其他房间。

### 18. dashboard.js:125

If saving fails, keep this page open and export each player’s JSON backup from Account settings → Saved data & backup → Player backup & import. Check browser storage space and permissions. An unreadable save starts a temporary garden while preserving the original data as a recovery copy. Download original data keeps that copy for repair; it may contain all local profiles and is not a player-backup JSON for importing. Keep it private. If storage is full, the original stored data is left untouched.

如果保存失败，请保持页面打开，并在账户设置 → 保存资料与备份 → 玩家备份与导入中为各玩家导出JSON备份。检查浏览器存储空间与权限。无法读取存档时，应用会启动临时花园，同时保留原始资料作为恢复副本。“下载原始资料”可保存该副本以供修复；它可能包含所有本地玩家资料，并非用于导入的玩家JSON备份，请妥善保管。存储空间不足时，不会覆盖原始存档。

### 19. dashboard.js:126

The app compares your last five completed results per eligible scored game and chooses the three lowest averages. Garden Pets, Today & Here, Around Us and the six new game previews are excluded. Ties favour the game played less recently. With fewer than three recorded games it fills the remaining places with other activities. Accuracy, completion and win results differ between games; this is a practice suggestion, not a diagnosis. Only the current local player’s retained results are used, not online rankings or speed.

应用比较符合条件的计分游戏最近最多五局的平均成绩，选择最低的三项。花园宠物、今日此地、身边新鲜事与六项新游戏预览不参与选择；同分时优先选择较久未玩的游戏。记录少于三项时补充其他活动。不同游戏使用正确率、完成率或胜负结果，因此仅作为练习建议，不是诊断。仅使用当前本地玩家保留的记录，不使用在线排名或速度。

### 20. dashboard.js:127

Select the Mind Garden sprout logo at the top left to return to the welcome page. The logo stays visible on phones, tablets and desktops; its name appears when space allows. All Games opens Catalog, where the centred All Games and My Games buttons let you browse or open your selection. Categories list All Games first, followed by the other categories in English alphabetical order. Search, choose a category and select a difficulty before starting.

点击左上角的心灵花园嫩芽标志返回欢迎页。手机、平板和电脑均保留标志，空间足够时显示名称。所有游戏会打开游戏目录，居中的“所有游戏”和“我的游戏”按钮可供浏览或查看个人选择。类别以所有游戏为首，其余按英文名称字母顺序排列。可搜索、选择类别，并在开始前选择难度。

### 21. dashboard.js:128

Check your device volume and whether the browser tab is muted. Open Music in the navbar or ☰ menu, select a sound and press ▶. Nature sounds can be paused by games or other music; welcome videos start muted.

检查设备音量及浏览器标签页是否静音。打开导航栏或☰菜单中的音乐，选择声音并点击▶。游戏或其他音乐可能暂停自然声音；欢迎视频默认静音。

### 22. dashboard.js:129

The app initially follows your device’s Reduce Motion setting. Use Menu → Settings → Animation to turn movement on or off, or Garden view → Scenery & media to choose Off, Gentle or Standard; your choice is saved for this player. Video playback is separate.

应用最初遵循设备的减少动态效果设置。在菜单 → 设置 → 动画中开关动态效果，或在花园景色 → 景色与媒体中选择关、轻柔或标准，选择会保存在此玩家的设置中。视频播放另行控制。

### 23. dashboard.js:130

Use T− / T+ or select a percentage from 80% to 200% in the navbar or ☰ menu. The ↺ button resets text to exactly 100%. Game cards wrap to fit. The navbar stays on one row, and the bouquet artwork keeps its proportions while its text grows.

使用导航栏或☰菜单中的T− / T+，或选择80%至200%的百分比。↺按钮将文字重设为100%。游戏卡片会根据空间换行；导航栏保持单行，花束文字放大时，图像仍保持适当比例。

### 24. dashboard.js:132

Choose the right player and light/dark scenery under Garden. Use JPEG, PNG or WebP for scenery photos, and MP4 or WebM for videos. Each player can keep up to 3 videos of up to 100 MB each. If a video cannot play, try another file; browser codec support varies.

在花园中确认当前玩家及浅色/深色背景。背景照片使用JPEG、PNG或WebP，视频使用MP4或WebM。每位玩家最多保存3个视频，每个不超过100 MB。若无法播放，请尝试其他文件；浏览器支持的视频编码可能不同。

### 25. dashboard.js:133

Only one active room is allowed in this browser’s online session. Guests must Leave room; hosts must Finish session or Cancel game & close room before joining another. Back to garden · stay joined keeps the current room active. Online play needs an internet connection. An expired or unavailable room offers Back to lobby; completed rankings remain accessible through Saved online rankings.

此浏览器的在线会话只能参与一个活动房间。客人须退出房间；房主须结束本次游戏或取消房间，才可加入另一房间。“返回花园 · 保留参与”仍会保留当前房间。在线游戏需要网络连接。房间过期或不可用时，可选择返回大厅；已完成的排名仍可通过“已保存的在线排名”查看。

### 26. dashboard.js:134

Check that you selected the same player and browser. Signed-in accounts sync saved progress when online; local-only players stay on this device. In Account settings → Saved data & backup → Player backup & import, import a Mind Garden JSON backup, then select the imported player. Existing players are kept. CSV is for viewing and cannot be imported.

请确认选择了同一玩家并使用同一浏览器。登录账户后，已保存进度会在联网时同步；本地玩家资料仅保留在此设备。在“账户设置 → 保存资料与备份 → 玩家备份与导入”中导入心灵花园JSON备份，再选择导入的玩家。现有玩家会保留。CSV仅供查看，无法导入。

### 27. dashboard.js:135

Check your internet connection, open Contact and choose Open in new tab. The form’s questions are bilingual; Google controls its own buttons, notices and language. You do not need to include game history or private information to describe a problem.

检查网络连接，打开联系并选择在新标签页打开。表单问题为中英双语；Google控制其自身按钮、提示与语言。描述问题时，无须附上游戏历史或私人资料。

### 28. dashboard.js:138

This notice explains Mind Garden’s current data handling with reference to Singapore’s Personal Data Protection Act 2012 (PDPA), where applicable. The Act includes requirements on purposes and consent, access and correction, protection, retention and overseas transfers. Your options and the app’s current limitations are described below.

本说明参照适用的新加坡《2012年个人资料保护法》（PDPA），介绍心灵花园目前处理资料的方式。该法涵盖用途与同意、查阅与更正、保护、保留期限及跨境传输等要求。下文说明您的选择及应用目前的限制。

### 29. dashboard.js:139

Local player information saves your preferences, progress and practice recommendations. Online identifiers, room activity and scores support room membership, invitations, shared games and saved rankings. The feedback form is for suggestions, troubleshooting and privacy enquiries; submit only information needed for your request. A nickname is enough for gameplay.

本地玩家资料用于保存偏好、进度及练习建议。在线标识、房间活动与成绩用于房间参与、邀请、共同游戏及已保存的排名。反馈表用于建议、问题排查与隐私咨询；请仅提交处理请求所需的资料。游戏使用昵称即可。

### 30. dashboard.js:140

Games use a plain background. Home and Pause sit above the centred game area; progress, Hint and Options sit below it. Icon help appears on hover, focus or long press. Home and Back ask before leaving. Yellow bulbs provide hints. Connect the Dots uses numbered grid routes: visit checkpoints in order, avoid reusing squares, and fill the board when instructed. Hints suggest a valid continuation or an undo towards a suggested solution. Gentle dominoes automatically takes the garden friend’s turn after a short pause; pausing stops the pending turn. Hints are recorded; activities that already distinguish assisted answers retain that distinction.

游戏使用纯色背景。主页与暂停位于居中游戏区上方；进度、提示与选项位于下方。悬停、聚焦或长按图标显示说明；主页与返回先确认退出。黄色灯泡提供提示。顺序连点使用数字方格路线：按顺序经过检查点，不重复格子，并按要求填满棋盘。提示可建议下一步，或建议撤销以回到一条可行路线。轻松多米诺的花园伙伴稍作停顿后自动出牌，暂停会停止等待中的出牌。提示次数会被记录，原有区分辅助作答的活动继续保留该规则。

### 31. dashboard.js:141

Games has All Games and My Games tabs, search and a category selector. Each game has one card; its information button explains the game without launching it. Choose a game to adjust its own settings. Completed levels show Replay, then Next level when available. Next level stays in the same game. The compact footer uses icon-only controls with help on hover, keyboard focus or long press. The gear opens Settings. Settings includes Easier level and Next selected game when another game is queued. The latter starts a different game. Back returns from Options or a break to your saved result. Close returns to the games list you started from; Home returns to the welcome garden.

游戏菜单提供所有游戏与我的游戏页签、搜索及类别选择。每个游戏只有一张卡片，说明按钮会显示玩法而不启动游戏。选择游戏后可调整该游戏的设置。完成关卡后先显示重玩，再显示下一关（如有）；下一关仍是同一游戏。简洁页脚提供休息图标、选项、游戏及主页图标。选项内可选择较轻松关卡；队列中还有游戏时，可选择“下一个已选游戏”开始不同的游戏。返回箭头从选项或休息画面返回已保存的成绩，关闭返回开始时的游戏列表，主页图标返回欢迎花园。

### 32. dashboard.js:142

The navbar shows your account name when signed in and Sign in when signed out, in every orientation. Creating account appears while the request runs. Account created confirms the server created your account; the separate Players saved confirmation means selected progress was uploaded. Password generated alone does not create an account. Local player means you are using this browser’s records. Sign in and Create account are separate screens. Open Create account from Online account (optional). After creation or password reset, save login details on their own screen, then continue to players. Create account asks for an account name and a password of at least 10 characters. Generate strong password is optional. You can optionally generate a recovery key at creation, or later from the signed-in account with your current password. Save Recovery Key to Device downloads a private file. A new key invalidates the previous key; resetting a password also replaces it. After successful creation/reset, the app offers the password to a supported browser manager. Use password manager retries this; browsers may suppress prompts. Save Password to Device downloads one unencrypted file with your account name, password and any recovery key shown. Keep it private. Save Recovery Key to Device downloads the key separately. These downloads work on computers, phones and tablets that support file downloads. Optional Device sign-in uses a passkey with Face ID, fingerprint or the device PIN when supported and configured. Set it up from Account after signing in; passwords remain available. Password recovery revokes existing passkeys, so set them up again afterwards. The recovery code appears immediately after creation and has its own PC download; it is not a device passkey. Passwords never enter player backups.

所有屏幕方向下，登录后导航栏显示账户名，退出后显示登录。提交时显示正在创建账户；账户已创建表示服务器已完成创建，玩家已保存则表示选中的进度已上传。仅生成密码并不代表已创建账户。本地玩家表示使用此浏览器的记录。登录与创建账户为独立页面。从在线账户（可选）打开创建账户。创建账户或重置密码后，请在独立页面保存登录资料，再继续选择玩家。创建账户需输入账户名及至少10个字符的密码，可选择自动生成高强度密码。可在创建时选择生成恢复密钥，也可登录后凭当前密码生成。保存恢复密钥到设备会下载私人文件；新密钥会使旧密钥失效，重置密码也会更换密钥。创建账户或重置成功后，会尝试交给支持的浏览器密码管理器，浏览器可能不弹提示。可点击使用密码管理器重试，或点击保存密码到设备，将账户名、密码及显示的恢复密钥下载到一个未加密私人文件。恢复密钥可单独下载到支持文件下载的电脑、手机或平板。设备及服务器支持时，可在登录后的账户中选择设置设备登录，使用面容识别、指纹或设备PIN；仍可使用密码。通过恢复密钥重置密码会撤销旧通行密钥，之后请重新设置。恢复代码在创建后立即显示并可单独下载到电脑，它并非设备通行密钥。玩家备份不包含密码。

### 33. dashboard.js:143

Choose Online account (optional) from Players. Sign in to load account players; device-only players stay separate. For an empty account, select players to copy or start with a new player. Save device players to this account copies selected records without removing originals. Matching names are not merged; a conflicting player ID creates a separate copy. Choose players carefully to avoid duplicates. Changes save automatically once connected; sign out to return to device-only profiles. Accounts have no separate facilitator permissions.

从玩家页面选择在线账户（可选）。登录后读取账户玩家，设备玩家单独保留。空账户可选择复制玩家或创建新玩家。将设备玩家保存至账户会复制选中的记录并保留原始资料，同名玩家不会合并；标识冲突时会创建独立副本，请避免重复复制。连接后更改会自动保存；退出登录返回设备玩家。账户没有独立的带领者权限。

### 34. dashboard.js:144

Player names, avatars, preferences, scores and retained activity are saved in this browser. Personal photos and welcome videos are also stored locally. My Life Album preview photos and labels are temporary, stay in this tab, and are discarded when you leave the activity or reload. They are not uploaded or included in backups. Personal music files must be selected again after a reload. Local-only profiles have no sign-in. Online accounts add password/passkey-protected server access. Account copies remain on this device even after sign-out and can be restored from Players → Saved account copies on this device. Anyone with access to this browser can access those local copies. Use your own device or a separate operating-system/browser profile for privacy. Players’ Progress should be used with everyone’s agreement.

玩家名称、头像、偏好、成绩与保留的活动记录保存在此浏览器。个人照片与欢迎视频也保存在本地。我的生活相册预览中的照片与标签仅暂存在当前页面，离开活动或刷新时会清除，不会上传，也不包含在备份中。刷新后需重新选择个人音乐文件。仅限本地的玩家无需登录。在线账户通过密码或通行密钥保护服务器访问。退出登录后，账户副本仍保留在设备，可从“玩家 → 此设备上的账户副本”恢复。能使用此浏览器的人也能访问本地副本，请使用个人设备或独立系统/浏览器配置保护隐私。使用玩家进度前，应取得所有人的同意。

### 35. dashboard.js:145

Online play sends your display name, session identifier, room activity and results to the game server. The lobby can show the host’s name and open room code. Room participants can see player names, scores and saved rankings. Opening Contact connects to Google Forms. Information you submit goes to Google and the form owner; the app does not automatically attach your player history.

在线游戏会将显示名称、会话标识、房间活动与成绩发送到游戏服务器。大厅可显示房主名称与开放房间码。房间参与者可看到玩家名称、成绩及已保存的排名。打开联系会连接Google表单。提交的资料会发送给Google及表单所有者；应用不会自动附上玩家历史。

### 36. dashboard.js:146

Loading the app connects to Cloudflare hosting and may request fonts from Google. Opening Contact connects to Google Forms. These services receive connection information such as your IP address, and may process data outside Singapore depending on their services and configuration. Google manages its form cookies and service notices.

加载应用会连接Cloudflare托管服务，也可能向Google请求字体。打开联系会连接Google表单。这些服务会接收IP地址等连接信息，并可能根据其服务与配置在新加坡境外处理资料。Google自行管理其表单Cookie与服务提示。

### 37. dashboard.js:147

You can play local games without entering the online lobby or submitting feedback. To stop online participation, leave or close your room, then choose Go offline. For access, correction, consent withdrawal or other privacy requests, use Contact and begin your message with “Privacy / PDPA”. Provide only relevant details, such as a room code and approximate date. Requests may require identity verification and are subject to applicable legal requirements. Do not send passwords, session tokens, identity documents or full backups through the general feedback form.

无需进入在线大厅或提交反馈，也可玩本地游戏。如需停止在线参与，请退出或关闭房间，再选择退出在线大厅。如需查阅、更正、撤回同意或提出其他隐私请求，请通过联系提交，并在消息开头注明“隐私 / PDPA”。仅提供房间码、大致日期等相关资料。请求可能需要核实身份，并须遵守适用法律要求。请勿通过一般反馈表发送密码、会话令牌、身份证件或完整备份。

### 38. dashboard.js:148

Activity and received multiplayer history are no longer automatically trimmed at 300 entries. Rename, player switching and sign-out keep device records. Previously discarded records cannot be recovered. Account requests have a 4 MB limit and compressed storage has a 1.8 MB limit; if saving fails, export the local data and keep it until resolved. Other local preferences and media remain until removed or browser storage is cleared. Online rooms expire after 24 hours, but that does not erase completed rankings. This version has no scheduled deletion of server history and does not control retention of submitted Google Forms feedback. Use Contact to ask about server-held or feedback records.

活动及已接收的多人历史不再自动限制为300条。修改名称、切换玩家及退出账户会保留设备记录，之前已丢弃的记录无法恢复。账户请求上限为4 MB，压缩存储上限为1.8 MB；保存失败时请导出并保留本地资料，直到问题解决。其他本地偏好与媒体会保留至被删除或浏览器存储被清除。在线房间24小时后过期，但不会因此删除已完成的排名。本版本没有服务器历史的定期删除机制，也不控制已提交Google表单反馈的保留期限。如需了解服务器或反馈记录，请通过联系咨询。

### 39. dashboard.js:149

Account settings → Saved data & backup → Player backup & import exports the selected player’s retained history, scores and preferences as JSON. Activity histories are no longer automatically trimmed at 300 games. Account player copies are retained on this device after sign-out. Browser storage limits still apply; clearing site data removes local records. Backups exclude photos, videos, personal music, other players and online sessions. Importing creates a separate player; it does not overwrite existing players. Keep downloaded backups somewhere private.

“账户设置 → 保存资料与备份 → 玩家备份与导入”可将所选玩家保留的历史、成绩与偏好导出为JSON。本地活动不再自动限制为300局，退出账户后仍保留账户玩家副本。浏览器存储空间有限，清除网站数据会移除本地记录。备份不包含照片、视频、个人音乐、其他玩家及在线会话。导入会创建独立玩家，不会覆盖现有玩家。请妥善保管下载的备份。

### 40. dashboard.js:150

Back up anything you want to keep first. Remove personal scenery photos and welcome videos under Garden → Scenery & media before removing their player. Use the trash icon on a player card to remove that player. History controls apply to the current player. Type its name to confirm; connected accounts also ask for the account password. Other players’ controls stay hidden. Shared device-only profiles cannot verify who is using the browser. Separate device copies and downloaded backups remain. To erase all players and local media, clear this site’s stored data in your browser; this cannot be undone without backups and original media files. Downloaded backups remain until you delete those files yourself.

请先备份需要保留的资料。删除玩家前，先在花园 → 景色与媒体中移除其个人背景照片与欢迎视频。使用玩家卡片上的垃圾桶图标删除该玩家；记录控件仅用于当前玩家。须输入玩家名确认，已连接账户还须输入账户密码。其他玩家的删除控件会隐藏。共用设备的本地玩家无法验证实际操作者，独立设备副本与已下载的备份会保留。如需清除所有玩家与本地媒体，请在浏览器中清除此网站的存储数据；没有备份与原始媒体文件时无法恢复。已下载的备份须自行删除。

### 41. dashboard.js:151

Removing a local player, leaving a room or clearing browser storage does not erase server-held room records or feedback already submitted to Google Forms. This app does not currently offer automatic deletion of those remote records. Use Contact for questions about them.

删除本地玩家、退出房间或清除浏览器存储，不会删除服务器上的房间记录或已提交至Google表单的反馈。应用目前不提供这些远程记录的自动删除功能。如有疑问，请通过联系反馈。

### 42. dashboard.js:163

Today’s Games is the main welcome action. All welcome cards can be hidden in Customise my home. Enjoy the garden fills the view with scenery, with progress below and Back to games to restore your cards.

今日游戏是欢迎页的主要操作。定制我的主页可隐藏任意欢迎卡片。欣赏花园以整屏展示景色，进度保留在下方；返回游戏可恢复卡片。

### 43. dashboard.js:165

Confirmed account-player deletion also removes the matching saved device copy. Saved on this device offers separate restore and delete actions. Completed bouquets stay in My Garden. At Full Bloom, Grow another starts a fresh bouquet without changing scores. Back returns one menu step. Confirmation appears only if unsaved gameplay would be lost. All Games and My Games share compact cards that adapt to the screen and text size. Tap the information icon for details. Each preparation screen shows its instruction once. The Play menu uses two columns when space permits and stacks at larger text sizes. The slimmer navigation grows with text size. Retired scenery is replaced by Japanese Cherry Garden; newer scenery choices are retained. All Games has search and a compact category dropdown. My Games shows removal controls only after Edit my games; Undo restores the game without changing scores.

确认删除账户玩家后，也会删除此设备上对应的保存副本。已保存在此设备提供独立的恢复与删除操作。完成的花束保留在我的花园。盛开后，选择再种一束即可开始新花束，成绩不变。返回箭头返回上一级菜单；只有未保存的游戏会丢失时才需确认。所有游戏与我的游戏使用一致的紧凑卡片，并随屏幕及字号调整。点击信息图标查看详情。每个准备画面仅显示一次玩法说明。游戏菜单在空间足够时使用两列，字号较大时改为单列。精简导航栏随字号扩大。旧景色已替换为日本樱花园；保留较新的景色选择。所有游戏提供搜索和紧凑的类别下拉列表。我的游戏仅在编辑模式显示移除控件；撤销可恢复游戏，成绩不变。

### 44. dashboard.js:167

The menu uses aligned icons and compact sound and animation switches. Player cards have rename and delete icons. Home, Pause, Hint and Options share a centred icon row below progress. Exit confirmation uses one border and two icon buttons. Information buttons open a centred dialog. Enlarged text wraps and scrolls; the optional tagline is hidden at 150% and above.

菜单采用对齐图标和紧凑的声音及动画开关。玩家卡片提供改名和删除图标。主页、暂停、提示和选项图标在进度下方居中排列。退出确认采用单层边框和两个图标按钮。说明按钮打开居中对话框。放大文字后可自动换行和滚动；150%及以上时隐藏可选标语。

### 45. dashboard.js:171

My Games: choose games in Choose my games. Use Edit my games to show Remove buttons and Done to leave editing. Removal only changes your favourites.

我的游戏：在选择我的游戏中勾选游戏。编辑我的游戏显示移除按钮，完成退出编辑。移除仅更改收藏。

### 46. dashboard.js:176

Local profiles and account copies remain in this browser after sign-out. Other people using the same browser may access them. Keep a backup before clearing browser storage or moving devices.

本地资料及账户副本在退出后仍保留于此浏览器。使用同一浏览器的人可能访问这些资料。清除存储或更换设备前请备份。

### 47. dashboard.js:177

An online account is optional and stores only the players you explicitly choose to copy. Player identity uses separate IDs, not names. Credentials are excluded from player backups.

在线账户为可选功能，仅存储您明确选择复制的玩家。玩家使用独立编号识别，不按名称合并。玩家备份不含登录凭据。

### 48. dashboard.js:178

Personal photos, videos and music do not automatically transfer to another device. Browser storage can be cleared or evicted; it is not a permanent backup.

个人照片、视频和音乐不会自动传至其他设备。浏览器存储可能被清除，不能作为永久备份。

### 49. data-export.js:40

Existing players are kept. After importing, use Choose or add a player to select the restored player. Photos, videos, music files and online room sessions are not included. CSV cannot be imported.

保留现有玩家。导入后，使用“选择或添加玩家”选择恢复的玩家。不包含照片、视频、音乐文件或在线房间会话。不支持导入 CSV。

### 50. device-signin.js:5

First sign in with your password, then set up device sign-in in Account. After setup, use Face ID, fingerprint or your device PIN. Mind Garden never receives your face or fingerprint. Your passkey provider may sync the passkey to your other devices. Use a personal device, especially when an account contains several players. You can always use your account password instead.

请先用密码登录，再在账户中设置设备登录。设置后可使用面容识别、指纹或设备PIN。心灵花园不会接收面部或指纹资料。通行密钥提供商可能将密钥同步到其他设备。请使用个人设备，尤其当账户包含多位玩家时。您仍可改用账户密码登录。

### 51. menu-simplify.js:50

Weekly progress for the players loaded here. Signed in: this account’s players. Signed out: this device’s players. Players’ Progress is a group progress summary, not account management. Leaderboard compares games played and best times.

此处显示已载入玩家的每周进度。登录后显示此账户玩家；未登录时显示此设备玩家。玩家进度是群组进度概览，并非账户管理。排行榜比较已玩局数及最佳用时。

### 52. multiplayer.js:76

Enter the online lobby once on each device to receive room codes automatically. Account sign-in alone does not connect the lobby. Joining a room shares your display name and scores with its players.

每台设备进入在线大厅后即可自动接收房间码。仅登录账户不会连接大厅。加入房间后，其他玩家可看到你的显示名称和积分。

### 53. multiplayer.js:281

Completed scores are kept after a room closes. Only participants can view a room’s rankings. History follows this browser’s online identity; clearing site data removes access to that identity.

房间关闭后，已完成的成绩仍会保留。仅参与者可查看房间排名。记录与此浏览器的在线身份关联，清除网站数据会失去该身份的访问权限。

### 54. personal-photos.js:10

Choose one photo for each appearance. Photos belong to this player in this browser on this device; clearing site data removes them. JPG, PNG or WebP, up to 25 MB.

为每种外观选择照片。照片只保存在此设备的浏览器，清除网站数据后会删除。支持25MB以内的JPG、PNG或WebP。

### 55. personal-progress.js:6

Scores are activity percentages, not health assessments. Older results without a level remain separate. Preview results are saved by game. Team Garden is a shared team score. Garden Pets has no score.

成绩是活动百分比，不是健康评估。没有难度记录的旧成绩单独显示。预览成绩按游戏保存。团队花园是团队成绩。花园宠物不计分。

### 56. v4.js:28

Games use a plain background. Home and Pause are at the top; Settings is at the bottom right. Yellow Hint icons offer help. Home and Back ask for confirmation before leaving. About includes first-time setup, the full user guide, troubleshooting and privacy information.

游戏使用纯色背景。顶部有主页与暂停，右下角为设置。黄色提示图标可提供帮助；主页与返回会先确认退出。“关于”包含首次设置、完整指南、问题排查与隐私信息。

### 57. welcome-media.js:28

Add up to 3 MP4 or WebM videos for this player, up to 100 MB each. Videos stay in this browser. Select one or use the scenery controls in ☰ → Garden view. Playback starts muted; use the video controls to change sound.

为此玩家添加最多3个MP4或WebM视频，每个不超过100MB。视频保存在此浏览器，可通过☰ → 花园景色中的背景切换箭头切换。默认静音，可用视频控件调整。

## Before implementation

Approve the copy direction first. Then update English/Chinese pairs together, rebuild the catalogue, and check actual screens at mobile/desktop widths and enlarged text. Verify empty, loaded, error, offline and destructive-action states. Source tests alone do not prove visual fit or semantic accuracy.
