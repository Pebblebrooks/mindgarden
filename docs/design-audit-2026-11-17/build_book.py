from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from pathlib import Path
import math,json,textwrap
R=Path(__file__).resolve().parents[2]; O=R/'docs/design-audit-2026-11-17'; O.mkdir(exist_ok=True)
pdfmetrics.registerFont(TTFont('UI','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('UIB','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
pdfmetrics.registerFont(UnicodeCIDFont('STSong-Light'))
c=canvas.Canvas(str(O/'Mind-Garden-Design-Audit-and-Previews.pdf'),pagesize=(960,860)); c.setTitle('Mind Garden | Design audit and proposed previews'); c.setAuthor('Mind Garden design review')
page=0; theme='dark'; bg='#102830';fg='#eef7f3';panel='#244b53';edge='#8daea5';gold='#ffda48'
def col(x): return HexColor(x)
def palette(light=False):
 global bg,fg,panel,edge,theme
 theme='light' if light else 'dark'; bg='#f7faf3' if light else '#102830';fg='#194c43' if light else '#eef7f3';panel='#e1eddf' if light else '#244b53';edge='#76998e' if light else '#86aaa0'
def rect(x,y,w,h,fill,stroke=None,r=0):
 c.setFillColor(col(fill));c.setStrokeColor(col(stroke or fill)); c.setLineWidth(1)
 if r:c.roundRect(x,y,w,h,r,fill=1,stroke=bool(stroke))
 else:c.rect(x,y,w,h,fill=1,stroke=bool(stroke))
def txt(x,y,s,size=18,bold=False,color=None,align='center'):
 c.setFillColor(col(color or fg));c.setFont('STSong-Light' if any('\u4e00'<=v<='\u9fff' for v in s) else 'UIB' if bold else 'UI',size)
 (c.drawCentredString if align=='center' else c.drawString)(x,y,s)
def lines(x,y,s,width=342,size=19,bold=False,color=None,leading=None):
 words=s.split(); out=[]; line='';font='UIB' if bold else 'UI'
 for word in words:
  trial=(line+' '+word).strip()
  if pdfmetrics.stringWidth(trial,font,size)>width and line:out.append(line);line=word
  else:line=trial
 out.append(line)
 for line in out:txt(x,y,line,size,bold,color);y-=leading or size*1.38
 return y

def icon(kind,x,y,size=25,color=None):
 c.saveState();c.translate(x,y);c.scale(size/24,size/24);c.setStrokeColor(col(color or fg));c.setFillColor(col(color or fg));c.setLineWidth(1.8);c.setLineCap(1);c.setLineJoin(1)
 def line(a,b,d,e):c.line(a,b,d,e)
 if kind=='back':line(8,0,-8,0);line(-8,0,0,8);line(-8,0,0,-8)
 elif kind=='next':line(-8,0,8,0);line(8,0,0,8);line(8,0,0,-8)
 elif kind=='close':line(-7,-7,7,7);line(-7,7,7,-7)
 elif kind=='pause':rect(-6,-8,3,16,color or fg);rect(3,-8,3,16,color or fg)
 elif kind=='play':
  p=c.beginPath();p.moveTo(-5,-8);p.lineTo(8,0);p.lineTo(-5,8);p.close();c.drawPath(p,fill=1,stroke=0)
 elif kind=='music':line(5,7,5,-5);line(-5,5,-5,-8);line(-5,5,5,7);c.ellipse(-10,-11,-4,-6,fill=1,stroke=0);c.ellipse(0,-8,6,-3,fill=1,stroke=0)
 elif kind=='sound':
  p=c.beginPath();p.moveTo(-9,-3);p.lineTo(-5,-3);p.lineTo(1,-8);p.lineTo(1,8);p.lineTo(-5,3);p.lineTo(-9,3);p.close();c.drawPath(p,fill=0,stroke=1);c.arc(-2,-7,11,7,-60,120)
 elif kind=='language':txt(0,-6,'文A',17,color=color or fg)
 elif kind=='info':c.circle(0,0,9,fill=0,stroke=1);txt(0,-5,'i',15,True,color or fg)
 elif kind=='hint':
  c.circle(0,2,6,fill=1,stroke=0);line(-3,-6,3,-6);line(-2,-9,2,-9)
  for a in [0,45,90,135,180,225,315]:
   an=math.radians(a);line(9*math.cos(an),2+9*math.sin(an),11*math.cos(an),2+11*math.sin(an))
 elif kind=='settings':
  c.circle(0,0,7,fill=0,stroke=1);c.circle(0,0,2.5,fill=0,stroke=1)
  for a in range(0,360,45):
   an=math.radians(a);line(7*math.cos(an),7*math.sin(an),10*math.cos(an),10*math.sin(an))
 elif kind=='home':line(-9,-1,0,8);line(0,8,9,-1);line(-6,0,-6,-8);line(-6,-8,6,-8);line(6,-8,6,0);line(-1,-8,-1,-3);line(-1,-3,3,-3);line(3,-3,3,-8)
 elif kind=='grid':
  for a in [-7,3]:
   for b in [-7,3]:c.rect(a,b,5,5,fill=0,stroke=1)
 elif kind=='replay':c.arc(-8,-8,8,8,30,290);line(-8,6,-8,0);line(-8,0,-2,0)
 elif kind=='search':c.circle(-2,2,6,fill=0,stroke=1);line(3,-3,9,-9)
 elif kind=='check':line(-8,0,-2,-6);line(-2,-6,9,7)
 elif kind=='person':c.circle(0,5,4,fill=0,stroke=1);c.arc(-9,-13,9,0,0,180)
 elif kind=='chart':
  line(-9,-8,-9,8);line(-9,-8,10,-8)
  for xx,hh in [(-4,2),(2,6),(8,10)]:line(xx,-4,xx,hh)
 elif kind=='people':
  c.circle(-4,5,3,fill=0,stroke=1);c.circle(5,4,2.5,fill=0,stroke=1);c.arc(-11,-12,3,0,0,180);c.arc(0,-10,12,-1,0,150)
 elif kind=='trophy':
  line(-6,8,6,8);line(-6,8,-5,-1);line(6,8,5,-1);c.arc(-5,-4,5,3,180,180);line(0,-4,0,-8);line(-5,-9,5,-9);c.arc(-10,0,0,9,90,180);c.arc(0,0,10,9,-90,180)
 elif kind=='gamepad':
  c.roundRect(-10,-6,20,13,5,fill=0,stroke=1);line(-7,1,-1,1);line(-4,-2,-4,4);c.circle(5,2,1,fill=1,stroke=0)
 elif kind=='menu':
  for yy in [-7,0,7]:line(-9,yy,9,yy)
 elif kind=='minus':c.circle(0,0,9,fill=0,stroke=1);line(-4,0,4,0)
 elif kind=='moon':c.arc(-8,-8,8,8,70,280);c.arc(-3,-4,10,10,100,230)
 elif kind=='cards':
  for xx in [-8,-1,6]:c.rect(xx,-8,3,16,fill=0,stroke=1)
 c.restoreState()

def button(x,y,w,label,primary=False,h=48):
 rect(x,y,w,h,gold if primary else panel,edge if not primary else None,12);txt(x+w/2,y+h/2-6,label,18,True,color='#163d35' if primary else fg)
def foot(items=None,progress='Round 2 of 6'):
 if progress:txt(195,87,progress,16,True)
 items=items or [('pause','Pause'),('hint',''),('settings','Settings')]
 gap=88;start=195-gap*(len(items)-1)/2
 for i,(kind,label) in enumerate(items):
  x=start+i*gap;icon(kind,x,48,28 if kind=='hint' else 25,gold if kind=='hint' else None)
  if label:txt(x,19,label,13)
def shell(title,sub='',utilities=True,light=False):
 palette(light);rect(0,0,390,664,bg,edge,18);icon('back',32,631);icon('close',358,631);txt(195,625,title,20,True)
 if sub:txt(195,588,sub,16)
 if utilities:
  for x,kind in zip([139,195,251],['language','music','sound']):icon(kind,x,548,25)

def grid(values,y=330,cols=2,height=60):
 gap=10;w=(342-(cols-1)*gap)/cols
 for i,v in enumerate(values):
  x=24+(i%cols)*(w+gap);yy=y-(i//cols)*(height+gap);rect(x,yy,w,height,panel,'#3b99a5',12);txt(x+w/2,yy+height/2-7,str(v),22,True)
def board(rows=5,cols=4,y=490,height=64):
 gap=8;w=(342-(cols-1)*gap)/cols
 for row in range(rows):
  for cc in range(cols):
   x=24+cc*(w+gap);yy=y-row*(height+gap);rect(x,yy,w,height,panel,'#3b99a5',12)
   if row==0 and cc<2:icon('check',x+w/2,yy+height/2,25,gold)
   else:
    c.setStrokeColor(col(edge));c.circle(x+w/2,yy+height/2,9,fill=0,stroke=1)

def screen(kind,light=False):
 if kind=='pairs':
  shell('Matching Pairs','Round 1 · Group play',light=light);txt(195,502,'Find matching pictures.',22,True);board(y=414,height=61);foot([('hint','')],'1 of 10 pairs · 15 turns')
 elif kind=='review':
  shell('Remember the order','',light=light);txt(195,475,'Let’s review',26,True);txt(195,438,'Answer differs',19)
  for x,label,val in [(24,'Correct answer','radio'),(200,'Your answer','ladybird')]:
   rect(x,285,166,120,panel,None,16);txt(x+83,368,label,17);txt(x+83,325,val,23,True)
  icon('back',72,244);txt(195,238,'Review 2 of 4',17);icon('next',318,244);button(75,153,240,'See results',True);foot([('settings','Settings')],'')
 elif kind in ['pattern','time','quiz','flag','zh']:
  if kind=='pattern':
   shell('Number patterns','Level 15 / 15 · Balanced',light=light);lines(195,454,'Work out the missing number.',size=23,bold=True);txt(195,381,'17, 47, 23, 94, 29, 188, ?, 376',20,True);grid(['34','35','32','33','37','36'],y=286,cols=3,height=56);lines(195,184,'Two alternating lists: add 6 in one; double the other.',size=19);foot()
  elif kind=='time':
   shell('Time later','Level 1 / 15 · Balanced',light=light);lines(195,448,'What time is 2 hours later?',size=23,bold=True);txt(195,358,'02:00',40,True);grid(['03:00','04:00','03:55'],y=251,cols=3,height=64);foot()
  elif kind=='quiz':
   shell('Match the word','Group play · Question 1 of 8',light=light);lines(195,455,'Which word means a small cat?',size=23,bold=True);grid(['Kitten','Puppy','Calf','Cub'],y=322);foot([('hint','')],'Round 2')
  elif kind=='flag':
   shell('Flag Match','Level 1 / 15 · Balanced',light=light);lines(195,480,'Which country is this?',size=23,bold=True)
   rect(105,335,180,108,'#cf1830');rect(105,362,180,54,'#002969');c.setFillColor(col('#fff'));c.circle(195,389,23,fill=1,stroke=0);grid(['Laos','Timor-Leste'],y=240,height=58);rect(24,240,166,58,'#356858','#a4dab2',12);txt(97,262,'Laos',22,True);icon('check',165,270,20,'#ffffff');lines(195,194,'Correct - well done!',size=20);icon('next',195,146,26,gold);foot()
  else:
   shell('数字规律','第 15 / 15 关 · 适中',light=True);txt(195,460,'找出缺少的数字。',27,True);txt(195,385,'17, 47, 23, 94, 29, 188, ?, 376',20,True);grid(['34','35','32','33','37','36'],y=290,cols=3,height=56);txt(195,188,'两组交替：一组加6，另一组乘2。',21);foot([('pause','暂停'),('hint',''),('settings','设置')],'第 2 / 6 轮')
 elif kind=='word':
  shell('Word builder','Level 15 / 15 · Balanced',light=light);lines(195,478,'Spell the word.',size=23,bold=True);rect(160,400,70,10,'#69b1d2');c.setFillColor(col('#ffd263'));p=c.beginPath();p.moveTo(194,417);p.lineTo(194,462);p.lineTo(164,417);p.close();c.drawPath(p,fill=1,stroke=0);p=c.beginPath();p.moveTo(200,417);p.lineTo(200,453);p.lineTo(226,417);p.close();c.drawPath(p,fill=1,stroke=0);txt(195,372,'S A _ _ _ _ _ _',24);grid(list('THCABGSILO'),y=287,cols=5,height=54);lines(195,175,'Try another letter.',size=19);foot([('replay','Undo'),('hint',''),('settings','Settings')],'Round 3 of 6')
 elif kind=='dots':
  shell('Connect the Dots','Level 10 / 15 · Challenging',light=light);question_bottom=lines(195,494,'Connect the numbers in order.',size=22,bold=True);board_top=question_bottom-16
  for r in range(6):
   for q in range(6):
    x=45+q*50;y=board_top-50-r*50;rect(x,y,50,50,bg,edge)
    if (r*6+q) in [0,5,13,20,27,32]:txt(x+25,y+17,str([0,5,13,20,27,32].index(r*6+q)+1),20,True)
  foot([('replay','Undo'),('hint',''),('settings','Settings')],'Puzzle 2 of 3')
 elif kind=='pet':
  shell('Garden Pets','',light=light);button(75,472,240,'Toby · Dog')
  # Use the existing sprite artwork without changing the source asset.
  c.saveState();p=c.beginPath();p.rect(60,184,270,270);c.clipPath(p,stroke=0);c.drawImage(str(R/'public/pets/toby-sprites.webp'),60,184-810,width=1080,height=1080,mask='auto');c.restoreState();txt(315,420,'♥',30,True,color='#f6a7b2');txt(80,385,'♥',24,True,color='#f6a7b2');txt(195,157,'That feels lovely.',20);foot([('grid','Games'),('pause','Pause'),('hint',''),('settings','Settings')],'')
 elif kind=='move':
  shell('Move & Remember','',light=light)
  for x,w,label in [(16,120,'1 Follow'),(142,100,'2 Rest'),(248,126,'3 Recall')]:button(x,478,w,label,primary=x==16,h=40)
  c.saveState();p=c.beginPath();p.roundRect(119,181,152,284,18);c.clipPath(p,stroke=0);c.drawImage(str(R/'public/move-remember/assets/up.png'),119-304,181,width=608,height=304);c.restoreState()
  lines(195,155,'Raise your hands gently.',size=22,bold=True);foot([('pause','Pause'),('hint',''),('settings','Settings')],'Movement 4 of 8')
 elif kind in ['complete','activity']:
  shell('Level complete!' if kind=='complete' else 'Activity complete',utilities=False,light=light)
  if kind=='complete':
   txt(195,552,'★ ★ ★',40,True,color=gold);icon('info',345,563,22,gold);txt(195,507,'You found all 3 pairs!',21)
   for x,y,label,value in [(24,374,'Pair attempts','3'),(200,374,'Mismatches','0'),(24,275,'Hints used','0'),(200,275,'Time','0:04')]:
    rect(x,y,166,87,panel,None,14);txt(x+83,y+59,label,16,True);txt(x+83,y+22,value,27,True)
   txt(195,238,'Your garden grew a little.',19)
  else:
   txt(195,485,'Thank you for taking part.',23,True);lines(195,435,'Activity saved. No exercise or memory score recorded.',size=19)
  button(110,170,170,'Done',True)
  for x,k,l in ([(111,'replay','Replay'),(279,'next','Next level')] if kind=='complete' else [(195,'replay','Replay')]):icon(k,x,130);txt(x,103,l,15,True)
  foot([('settings','Settings'),('home','Home')],'')
 elif kind in ['directory','choose','host','guest','countdown','groupresult','keep']:
  title={'directory':'Play Together','choose':'Choose game','host':'Alex’s group','guest':'Alex’s group','countdown':'Matching Pairs','groupresult':'Round complete','keep':'Close your group?'}[kind];shell(title,utilities=False,light=light)
  if kind=='directory':
   button(24,532,342,'Create group',True);button(24,466,342,'Join with code');txt(195,406,'Open groups',20,True)
   for y,name,status in [(266,'Alex’s group','2 players · Waiting'),(138,'Mei’s group','3 players · Waiting')]:
    rect(24,y,342,108,panel,None,14);txt(195,y+76,name,22,True);txt(195,y+44,status,17);txt(195,y+15,'Join',17,True,color=gold)
  elif kind=='choose':
   button(24,533,342,'Search games');icon('search',339,557);button(24,473,342,'All categories')
   for i,name in enumerate(['Matching Pairs','Number patterns','Times tables','Picture bingo']):
    x=24+(i%2)*176;y=344-(i//2)*110;rect(x,y,166,96,panel,edge,12);lines(x+83,y+57,name,width=140,size=18,bold=True)
   button(24,151,342,'Game options · 10 pairs');button(75,42,240,'Use game',True)
  elif kind in ['host','guest']:
   txt(195,562,'Matching Pairs · 10 pairs',21,True);button(95,493,200,'Change game' if kind=='host' else 'Game details');txt(195,454,'Boris joined' if kind=='host' else '2 players',20,True,color=gold)
   for y,name,status in [(363,'Alex · Host','Ready'),(289,'Boris · You' if kind=='guest' else 'Boris','Ready' if kind=='host' else 'Not ready')]:
    rect(24,y,342,62,panel,None,12);txt(42,y+22,name,19,True,align='left');txt(280,y+22,status,17)
   txt(195,235,'Invite',19);button(75,119,240,'Start game' if kind=='host' else 'Ready',True);button(75,51,240,'Close group' if kind=='host' else 'Leave group')
  elif kind=='countdown':
   txt(195,499,'Starting together',24,True);txt(195,316,'3',90,True,color=gold);txt(195,225,'Get ready.',22)
  elif kind=='groupresult':
   txt(195,559,'Results saved',21);txt(195,493,'Alex     6 / 6',24,True);txt(195,441,'Boris    5 / 6',24,True);button(75,292,240,'Choose game',True);button(75,222,240,'Replay');button(75,152,240,'Finish');txt(195,95,'Players stay together.',17)
  else:
   lines(195,450,'Your group is still open.',size=23);button(48,298,294,'Keep hosting',True);button(48,230,294,'Close group');lines(195,154,'Keep hosting returns to this group.',size=18)
 elif kind in ['home','catalogue','account','accountsettings','players','help','hint','setup','settings','progress','rankings','signin','confirm']:
  title={'home':'Mind Garden','catalogue':'My Games (4)','account':'Account','accountsettings':'Account settings','players':'Switch player','help':'Menu','hint':'Hint','setup':'Matching Pairs','settings':'Settings','progress':'My Progress','rankings':'Saved rankings','signin':'Sign in','confirm':'Exit game?'}[kind];shell(title,utilities=False,light=light)
  if kind=='home':
   rect(1,600,388,62,bg);txt(20,625,'Mind Garden',17,True,align='left');
   for x,k in zip([178,222,266,310,354],['person','language','moon','cards','menu']):icon(k,x,631,23)
   txt(195,548,'Mind Garden',30,True)
   txt(195,493,'Keep your mind active',23,True);txt(195,447,'Welcome, Alex',22)
   button(24,347,342,'Today’s Games',True);icon('info',342,371,20,'#194c43')
   for i,name in enumerate(['All Games','My Games','Play Together','My Progress']):
    x=24+(i%2)*176;y=224-(i//2)*108;rect(x,y,166,94,panel,edge,14);icon('info',x+143,y+70,20);icon(['grid','gamepad','people','chart'][i],x+83,y+55,25);txt(x+83,y+18,name,17,True)
   rect(112,10,166,94,panel,edge,14);icon('info',255,80,20);icon('trophy',195,65,25);txt(195,28,'Leaderboard',17,True)
  elif kind=='catalogue':
   rect(1,600,388,62,bg);txt(20,625,'Mind Garden',17,True,align='left')
   for x,k in zip([178,222,266,310,354],['person','language','moon','cards','menu']):icon(k,x,631,23)
   txt(195,580,'My Games (4)',24,True)
   button(24,514,166,'All Games');button(200,514,166,'My Games',True);button(24,447,342,'Search games');icon('search',339,471);button(24,381,342,'All categories')
   for i,name in enumerate(['Matching Pairs','Number patterns','Move & Remember','Connect the Dots']):
    x=24+(i%2)*176;y=208-(i//2)*164;rect(x,y,166,144,panel,edge,16);icon('info',x+83,y+116,21);icon('minus',x+142,y+116,21);icon('grid',x+83,y+78,30);lines(x+83,y+38,name,width=148,size=17,bold=True)
  elif kind in ['account','accountsettings']:
   icon('person',195,548,44);txt(195,500,'Signed in as',17);txt(195,463,'Alex',30,True);txt(195,429,'Player: Sam',18);icon('info',344,477,21)
   items=['Switch player','Account settings','Sign out'] if kind=='account' else ['Sign-in & security','Saved data & backup','Account photo']
   for i,label in enumerate(items):button(24,337-i*68,342,label)
   button(75,53,240,'Continue playing' if kind=='account' else 'Done',True)
  elif kind=='players':
   for i,name in enumerate(['Sam · Selected','Daniel','Mei']):
    y=455-i*118;rect(24,y,342,100,panel,edge,14);txt(195,y+61,name,23,True);txt(195,y+25,'Edit              Delete',16)
   button(75,110,240,'Add player');button(75,42,240,'Done',True)
  elif kind=='help':
   for i,name in enumerate(['Today’s Games','My Games','All Games','Play Together']):txt(105+(i%2)*180,550-(i//2)*48,name,17,True)
   for y,label in [(405,'Garden view'),(352,'Player'),(299,'Settings'),(246,'Help - expanded')]:txt(195,y,label,21,True)
   rect(24,70,342,149,panel,None,14)
   for y,label in [(184,'Quick guide'),(138,'About'),(92,'Troubleshooting')]:txt(195,y,label,19)
  elif kind=='hint':
   txt(195,549,'Number patterns',22,True);lines(195,470,'Read every other number.',size=24,bold=True);txt(195,393,'17 → 23 → 29 → 35',26,True);lines(195,331,'Add 6 each time.',size=22);txt(195,266,'47 → 94 → 188 → 376',22,True);lines(195,209,'The other list doubles.',size=21);button(100,64,190,'Done',True)
  elif kind=='setup':
   lines(195,523,'Match related pictures.',size=25,bold=True);lines(195,457,'For example: dog and bone.',size=20);txt(195,375,'Level 7 · Balanced',21);txt(195,324,'3 hints available',19);button(75,207,240,'Options');button(75,122,240,'Begin',True)
  elif kind=='settings':
   for i,label in enumerate(['Change level','Background sound','Game sounds','Text size · 100%']):button(24,493-i*74,342,label)
   txt(195,165,'Game paused',18);button(75,67,240,'Resume',True)
  elif kind in ['progress','rankings']:
   button(24,529,342,'This player' if kind=='progress' else 'Select a saved group');txt(195,473,'Recent games' if kind=='progress' else 'Group results',23,True);icon('info',344,481,21)
   for i in range(5):
    rect(24,385-i*51,342,44,panel,None,6);txt(45,400-i*51,str(i+1),17,align='left');txt(145,400-i*51,['Matching Pairs','Number patterns','Word builder','Time later','Flag Match'][i] if kind=='progress' else ['Alex','Boris','Mei','Sam','Daniel'][i],15);txt(326,400-i*51,'6 / 6',16)
   button(100,53,190,'Done',True)
  elif kind=='signin':
   button(24,472,342,'Account name');button(24,398,342,'Password');txt(340,416,'Show',13);button(75,304,240,'Sign in',True);txt(195,248,'Use device sign-in',19);txt(195,199,'Recover account',19);txt(195,116,'Create account',19)
  else:
   lines(195,457,'This round will not be saved.',size=23);button(48,300,294,'Keep playing',True);button(48,230,294,'Exit')

def pagehead(title,subtitle):
 global page
 page+=1;c.setPageSize((960,860));rect(0,0,960,860,'#edf2ee');txt(38,816,title,25,True,'#173f38','left');txt(38,788,subtitle,13,False,'#42665b','left');txt(922,22,str(page),12,False,'#42665b')
def pair(title,a,b,note,leftlabel='',rightlabel='',lightB=True):
 pagehead(title,'APPROVED BASELINE 1.1 · Static preview only · 390 × 664 CSS-pixel layout · Not implemented')
 for x,k,light,label in [(45,a,False,leftlabel),(525,b,lightB,rightlabel)]:
  c.saveState();c.translate(x,110);screen(k,light);c.restoreState()
  txt(x+195,86,label or k.replace('_',' ').title(),16,True,'#173f38')
 lines(480,59,note,870,13,color='#42665b',leading=17);c.showPage()

def prosepage(title,sections):
 pagehead(title,'AUDIT / APPROVED REQUIREMENTS · Baseline v5.0.21 · 17 November 2026');y=744
 for h,text in sections:
  txt(42,y,h,21,True,'#173f38','left');y-=32
  for para in text.split('\n'):
   for line in textwrap.wrap(para,102):txt(42,y,line,15,False,'#254f45','left');y-=23
   y-=9
  y-=17
 c.showPage()

prosepage('Mind Garden | Audit & design review',[
 ('Review before implementation','These are approved static layout references with corrected spacing, not screenshots of corrected production behaviour. Implementation is authorized; deployment remains paused. The source audit covers the whole catalogue; rendered/device verification is incomplete and explicitly recorded.'),
 ('What needs correcting first','Shared styling differs between solo and group screens. Generic selected-button rules add ticks to sound icons. The group bulb has unwanted adjacent text. Group boards compete with oversized controls and reserved status rows. Review screens retain a second gameplay counter and Pause.'),
 ('What should be kept','Use v5.0.20 as the reference for centred solo utilities, explanatory hints, large artwork and visible completion actions. Keep v5.0.21 group readiness, named arrivals, catalogue and shared countdown. No whole-app rollback is proposed.'),
 ('How to use this book','Pages 4-20 show the proposed shared screens and responsive variants. The closing pages contain the app-wide inventory and release gates. The user has approved the baseline and authorized implementation; deployment remains gated.')])
prosepage('Audit evidence and limits',[
 ('Confirmed from current source and supplied screens','A01 conflicting instructions; A02 fragmented styling; A03 sound-button ticks; A04 left-aligned labelled bulb; A05 group board sizing conflicts; A06 generic group title; A07 duplicate review/gameplay progress. See AUDIT.md for source locations.'),
 ('Fresh live and behavioural checks','Live desktop home, 56-entry catalogue, Remember the Order setup and pre-start inspected. All 56 games launched at low/high level in English/Chinese: 224 DOM checks passed. Result, welcome/menu, navigation and approved-UI DOM tests also passed. A full-bundle bilingual review check moved item and pager together from 2/4 through 4/4 and back to 1/4.'),
 ('Not proven yet','The reported phone pager freeze is not reproduced. The independent round footer is confusing, but that alone does not explain every tap issue. Real phone audio, touch latency and every current game state still need rendered/device checks.'),
 ('Historical coverage is not current certification','v5.0.20 recorded 216 samples across 54 games, including 58 content-scroll flags. This is useful evidence of prior exceptions, not permission to call v5.0.21 mobile layouts passed.')])
prosepage('One visual protocol',[
 ('Compact glyphs, generous touch targets','Normal icons 24-26px; information 20-22px; yellow bulb 28-32px. Touch targets stay 44-48px. Language, background sound and game sound remain centred in that order. No checkmark or accidental slash from choice styling.'),
 ('Content stays together','Question text is equal to or larger than answer text. Group the question, task and choices. Use available height for comfortable spacing; compact the header/footer in short screens. Keep essential navigation visible.'),
 ('One meaning per screen','Review displays Review n of total. Completion shows Done, Replay, conditional Next level, Settings and Home without More options. Group play preserves its host/guest semantics and does not offer an unfair local Pause.'),
 ('Proposals requiring explicit agreement','Use the bulb alone, with accessible Hint/Rules name. Remove duplicate solo Begin where safe. At extreme text enlargement, permit a documented content scroll area only after reflow, never clipping or shrinking touch targets. No unlimited no-scroll promise.')])
pair('01 | Immediate regressions','pairs','review','A03-A08 · Small centred utilities; no Rules text beside bulb; all 20 cards visible; review uses one clear state.','Group matching · 20 cards','Solo review · no active Pause')
pair('02 | Question, task and answers','pattern','time','A10 · Equal task/answer hierarchy, smaller gaps within the task group and readable explanation.','Number patterns','Time later')
pair('03 | Dense mobile games','word','dots','A11 · Tile/grid layout uses the central area; Undo remains visible. Illustrative task content only.','Word builder','Connect the Dots')
pair('04 | Artwork uses the play area','pet','move','A13 · Existing artwork enlarged; one control row. Hearts remain visible with reduced motion.','Garden Pets','Move & Remember')
pair('05 | Completion is a distinct state','complete','activity','A12 · Stars centred independently; no filler, More options or active Pause. No Next level for unscored activity.','Scored level','Unscored activity')
pair('06 | Start group play clearly','directory','choose','A17-A18 · One directory; searchable supported games; variants in Game options, not unsupported solo levels.','1 · Create or join','2 · Choose game')
pair('07 | Names and readiness stay visible','host','guest','A17 · Named arrival and visible player rows. Host starts; guests confirm Ready. No player dropdown.','3 · Host sees who joined','4 · Guest gets ready')
pair('08 | Start together, then focus','countdown','quiz','A06/A17 · Shared countdown, actual game title and one question counter. No room details during play.','5 · Shared countdown','6 · Group quiz')
pair('09 | Continue or leave safely','groupresult','keep','A17 · Continue preserves the group. Keep hosting closes only this confirmation, never the group screen.','7 · Host results','8 · Cancel closing')
pair('10 | Home and catalogue','home','catalogue','A14 · Info alignment and search placement. Catalogue artwork is schematic; retain existing game artwork.','Home · compact navigation','My Games · shared card format')
pair('11 | Account clarity','account','accountsettings','A15 · Name and sign-in status are clear; selected player is separate. Sync status must reflect real state.','Account overview','Account settings')
pair('12 | Menus must reveal their content','players','help','A15-A16 · Whole-row player selection; separate edit/delete. Help expands into view with Close accessible.','Switch player','Expanded Help')
pair('13 | Explain rather than reveal','hint','setup','A09-A10 · Real pattern explanation; rules shown before play; finite hint budget stated clearly.','Pattern hint','Matching rule before play')
pair('14 | Settings and safe exit','settings','confirm','A20 · Settings pauses solo gameplay. Cancel preserves the exact round. Completed activities need no discard warning.','Solo settings','Unfinished exit')
pair('15 | Supporting screens','progress','rankings','Tables are representative data. Use remaining viewport for more rows; keep actions reachable and info closed by default.','My Progress','Saved group rankings')
pair('16 | Feedback and language','flag','zh','Colour plus text/mark for selection. Chinese retains the same hierarchy, spacing and navigation.','Flag Match feedback','Chinese · light theme')
# Responsive wide-screen composition at true diagram coordinates.
pagehead('17 | Responsive layout, not oversized controls','APPROVED BASELINE 1.1 · Landscape, tablet and desktop adaptations · Static composition')
for x,y,w,h,title in [(40,428,844,290,'Landscape · compact header / wider task grid'),(40,102,410,292,'Tablet · centred task group'),(485,102,400,292,'Desktop · bounded content')]:
 palette(False);rect(x,y,w,h,bg,edge,16);icon('back',x+26,y+h-28);icon('close',x+w-26,y+h-28);txt(x+w/2,y+h-34,'Number patterns',18,True)
 for xx,k in zip([x+w/2-50,x+w/2,x+w/2+50],['language','music','sound']):icon(k,xx,y+h-70,22)
 txt(x+w/2,y+h-111,'Work out the missing number.',20,True);txt(x+w/2,y+h-149,'17, 47, 23, 94, 29, 188, ?, 376',18,True)
 for i,v in enumerate(['34','35','32','33','37','36']):
  bw=48;left=x+w/2-169+i*58;rect(left,y+80,bw,44,panel,edge,10);txt(left+24,y+94,v,18,True)
 for xx,k in zip([x+w/2-70,x+w/2,x+w/2+70],['pause','hint','settings']):icon(k,xx,y+29,24,gold if k=='hint' else None)
 txt(x+w/2,y-23,title,14,True,'#173f38')
lines(480,39,'Wide-screen sketches show placement only; exact breakpoint and enlarged-text fit require rendered app validation.',870,13,color='#42665b');c.showPage()
# Inventory is intentionally explicit about pending visual verification.
rows=json.loads((O/'launch-audit.json').read_text())['games'] if (O/'launch-audit.json').exists() else []
for start in range(0,len(rows),28):
 pagehead('App-wide game inventory '+str(start//28+1),'All entries require shared header, icons, text, review, completion and exit checks')
 txt(42,748,'GAME',13,True,'#173f38','left');txt(430,748,'CURRENT DOM LAUNCH',13,True,'#173f38','left');txt(680,748,'RENDERED MATRIX',13,True,'#173f38','left')
 y=720
 for row in rows[start:start+28]:
  rect(36,y-6,888,23,'#e1eae3' if (start+rows[start:start+28].index(row))%2==0 else '#edf2ee');txt(44,y,row['name'],13,False,'#173f38','left');txt(430,y,('4/4 launched' if all(v['status']=='launched' for v in row['checks']) else 'See launch-audit.json'),13,False,'#173f38','left');txt(680,y,'Pending current full sweep',12,False,'#5d6f63','left');y-=23
 lines(480,52,'DOM launch is not visual validation. Low/high level in English/Chinese; movement iframe content requires separate checks.',870,13,color='#42665b');c.showPage()
prosepage('Required coverage beyond gameplay',[
 ('App surfaces','Home and card visibility; Today’s Games; All/My Games search/category/favourites; menu and expanded Help; About/guide; scenery/photo/media; bouquet/progress; leaderboard and saved rankings; empty/loading/offline/error states.'),
 ('Identity and forms','Account overview/settings; sign-in/create/recovery/device sign-in; optional account photo; player switch/rename/add/delete. Keep account identity, local player and save status distinct. Keyboard-open forms and confirmation focus require device checks.'),
 ('Group lifecycle','Directory, join/code, choose/options, host/guest waiting, named arrival, Ready, changed-setup readiness reset, countdown, play/help, review, results, replay/next game, host exit/cancel, guest leave, inactive host and reconnect.'),
 ('Game-specific exceptions','Memory study timing and pager; matching type changes and hint limits; dense word/grid games and Undo; stories/read-aloud and typed recall; Sudoku notes; domino automatic opponent; pet gestures/hearts/audio; movement narration and completion.')])
prosepage('Approval and future release discipline',[
 ('Persistent requirements','Approved PRODUCT-DESIGN-REQUIREMENTS.md assigns stable IDs to layout, icons, game states, group play, accounts and QA. It is the authoritative baseline. Conflicting older AGENTS.md guidance must be archived rather than left active.'),
 ('Every change, including new conversations','Read the PRD first. Identify affected IDs and screens. Record proposed deviations before implementation. Retain approved visual references and compare the actual changed app, not only isolated markup or mockups.'),
 ('Before deployment','Verify exact commit at phone, short landscape, tablet and desktop widths; English/Chinese; light/dark; 100%, 140% and 200% text. Record actual viewport, level and state. Test iPhone audio/touch, group lifecycle and cache update. Report missing coverage honestly.'),
 ('Approval requested','Baseline approved on 17 November 2026. The two spacing defects are corrected. Implementation is authorized. Actual rendered implementation previews remain required before deployment. Future conflicting requests must be discussed as isolated exceptions or global changes.')])
prosepage('Standards and product decisions',[
 ('Accessibility basis','WCAG 2.2 provides the accessibility framework. AA target size is at least 24x24 CSS pixels with exceptions; this product proposes larger 44-48px targets for easier touch use. Text resizing to 200% must retain content and functionality.'),
 ('Product-specific decisions','Centred utilities, top-right welcome info, top-centre catalogue info, yellow bulb and the exact footer order are Mind Garden decisions. They are not universally prescribed international icon-placement rules.'),
 ('References','https://www.w3.org/TR/WCAG22/\nhttps://www.w3.org/WAI/WCAG22/Understanding/resize-text.html'),
 ('Audit status','Source/requirements review and selected live/DOM checks completed. Full current rendered/device certification remains outstanding. Static previews communicate design intent; they do not prove production fit, touch response or sound.')])
# Full persistent protocol appendix, with the original requirement IDs.
protocol=(O/'PRODUCT-DESIGN-REQUIREMENTS.md').read_text()
pagehead('Approved PRD | persistent reference','Approved baseline 1.1 · Requirement IDs must accompany future changes')
y=744
for para in protocol.split('\n\n'):
 para=para.strip()
 if not para: continue
 heading=para.startswith('#')
 para=para.lstrip('# ').replace('`','')
 wrapped=textwrap.wrap(para,103 if not heading else 78)
 need=len(wrapped)*(20 if not heading else 25)+14
 if y-need<55:
  c.showPage();pagehead('Approved PRD | continued','Approved baseline 1.1 · Stable requirements for new conversations and releases');y=744
 for line in wrapped:
  txt(42,y,line,14 if not heading else 18,heading,'#173f38','left');y-=20 if not heading else 25
 y-=14
c.showPage()
c.save();print('Pages',page,'PDF',O/'Mind-Garden-Design-Audit-and-Previews.pdf')
