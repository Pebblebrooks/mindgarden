/* Preferences belong to stable local profile IDs, so renaming keeps them. */
(function(){
const defaults={deck:"garden",sceneryMinutes:0,sceneryOrder:"sequence",welcomeCardsHidden:false,lang:'en',timed:0,speak:0,mode:'auto',th:'cream',motionMode:'gentle',motionExplicit:false,still:0,homeNature:true,backgroundMuted:false,backgroundResumeMusic:false,sceneLight:'blossom',sceneDark:'blossom',photolight:false,photodark:false,heroLight:null,heroDark:null,motionPrevious:'gentle',soundscape:{music:'strings',nature:'garden',master:45,musicVolume:55,natureVolume:35,horn:false},snd:1,fs:0,textScale:null,bouquetRotation:true,quietGames:true,v4IntroSeen:false,hc:0,cb:0,lh:0,brk:1,bn:15};
const keys=Object.keys(defaults),copy=x=>JSON.parse(JSON.stringify(x));
function capture(){const out={};for(const k of keys)out[k]=copy(save[k]===undefined?defaults[k]:save[k]);return out}
if(!save.profilePrefsMigrated){me().preferences=capture();save.profilePhotoOwner=save.cp;save.profilePrefsMigrated=true}
function restore(){const pref=me().preferences||copy(defaults);for(const k of keys)save[k]=copy(pref[k]===undefined?defaults[k]:pref[k]);me().preferences=capture()}
const originalPersist=window.persist;window.persist=function(){me().preferences=capture();return originalPersist()};
const originalLoad=window.load;window.load=function(){originalLoad();restore();window.MindGardenSound?.restorePreferences();applyPrefs();window.dispatchEvent(new Event('gardenPlayerChange'))};restore();applyPrefs();persist();
window.MindGardenPlayerPreferences={capture,restore,defaults:copy(defaults)};
})();
