/******************** 
 * Iat(Formal) *
 ********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'IAT(Formal)';  // from the Builder filename that created this script
let expInfo = {
    'participant': '1',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instruction01RoutineBegin());
flowScheduler.add(Instruction01RoutineEachFrame());
flowScheduler.add(Instruction01RoutineEnd());
flowScheduler.add(Instruction02RoutineBegin());
flowScheduler.add(Instruction02RoutineEachFrame());
flowScheduler.add(Instruction02RoutineEnd());
const Practice_01LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Practice_01LoopBegin(Practice_01LoopScheduler));
flowScheduler.add(Practice_01LoopScheduler);
flowScheduler.add(Practice_01LoopEnd);




flowScheduler.add(Instruction03RoutineBegin());
flowScheduler.add(Instruction03RoutineEachFrame());
flowScheduler.add(Instruction03RoutineEnd());
const Practice_02LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Practice_02LoopBegin(Practice_02LoopScheduler));
flowScheduler.add(Practice_02LoopScheduler);
flowScheduler.add(Practice_02LoopEnd);




flowScheduler.add(Instruction04RoutineBegin());
flowScheduler.add(Instruction04RoutineEachFrame());
flowScheduler.add(Instruction04RoutineEnd());
const Practice_T1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Practice_T1LoopBegin(Practice_T1LoopScheduler));
flowScheduler.add(Practice_T1LoopScheduler);
flowScheduler.add(Practice_T1LoopEnd);




flowScheduler.add(Instruction05RoutineBegin());
flowScheduler.add(Instruction05RoutineEachFrame());
flowScheduler.add(Instruction05RoutineEnd());
const Formal_T1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Formal_T1LoopBegin(Formal_T1LoopScheduler));
flowScheduler.add(Formal_T1LoopScheduler);
flowScheduler.add(Formal_T1LoopEnd);




flowScheduler.add(Instruction06RoutineBegin());
flowScheduler.add(Instruction06RoutineEachFrame());
flowScheduler.add(Instruction06RoutineEnd());
const Practice_iso_ReverseLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Practice_iso_ReverseLoopBegin(Practice_iso_ReverseLoopScheduler));
flowScheduler.add(Practice_iso_ReverseLoopScheduler);
flowScheduler.add(Practice_iso_ReverseLoopEnd);




flowScheduler.add(Instruction07RoutineBegin());
flowScheduler.add(Instruction07RoutineEachFrame());
flowScheduler.add(Instruction07RoutineEnd());
const Practice_t2_ReverseLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Practice_t2_ReverseLoopBegin(Practice_t2_ReverseLoopScheduler));
flowScheduler.add(Practice_t2_ReverseLoopScheduler);
flowScheduler.add(Practice_t2_ReverseLoopEnd);




flowScheduler.add(Instruction08RoutineBegin());
flowScheduler.add(Instruction08RoutineEachFrame());
flowScheduler.add(Instruction08RoutineEnd());
const Formal_t2_reverseLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Formal_t2_reverseLoopBegin(Formal_t2_reverseLoopScheduler));
flowScheduler.add(Formal_t2_reverseLoopScheduler);
flowScheduler.add(Formal_t2_reverseLoopEnd);




flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Loop/Practice_iso.xlsx', 'path': 'Loop/Practice_iso.xlsx'},
    {'name': 'Loop/Practice_ipn.xlsx', 'path': 'Loop/Practice_ipn.xlsx'},
    {'name': 'Loop/Practice_t1.xlsx', 'path': 'Loop/Practice_t1.xlsx'},
    {'name': 'Loop/Practice_t1.xlsx', 'path': 'Loop/Practice_t1.xlsx'},
    {'name': 'Loop/Practice_iso _reverse.xlsx', 'path': 'Loop/Practice_iso _reverse.xlsx'},
    {'name': 'Loop/Practice_t2.xlsx', 'path': 'Loop/Practice_t2.xlsx'},
    {'name': 'Loop/Practice_t2.xlsx', 'path': 'Loop/Practice_t2.xlsx'},
    {'name': 'picture/Instruction01.png', 'path': 'picture/Instruction01.png'},
    {'name': 'picture/Instruction02.png', 'path': 'picture/Instruction02.png'},
    {'name': 'picture/Instruction03.png', 'path': 'picture/Instruction03.png'},
    {'name': 'picture/Instruction04.png', 'path': 'picture/Instruction04.png'},
    {'name': 'picture/Instruction05.png', 'path': 'picture/Instruction05.png'},
    {'name': 'picture/Instruction06.png', 'path': 'picture/Instruction06.png'},
    {'name': 'picture/Instruction07.png', 'path': 'picture/Instruction07.png'},
    {'name': 'picture/Instruction08.png', 'path': 'picture/Instruction08.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Instruction01Clock;
var Instruction_01;
var Instruction1;
var Instruction02Clock;
var Instruction_02;
var Instruction2;
var FixClock;
var fix;
var Practice_isoClock;
var text;
var key_resp_iso;
var Feedback_iso_PracticeClock;
var fb;
var Instruction03Clock;
var Instruction_03;
var key_resp_3;
var Practic_ipnClock;
var text_2;
var key_resp_ipn;
var Feedback_ipn_PracticeClock;
var fb_3;
var Instruction04Clock;
var Instruction_04;
var key_resp_4;
var Practice_t1Clock;
var text_3;
var key_resp_t1;
var Feedback_t1Clock;
var fb_2;
var Instruction05Clock;
var Instruction_05;
var key_resp_5;
var Instruction06Clock;
var Instruction_06;
var key_resp_6;
var Practice_iso_reverseClock;
var text_4;
var key_resp_iso_reverse;
var Feedback_iso_reverseClock;
var fb_4;
var Instruction07Clock;
var Instruction_07;
var key_resp_7;
var Practice_t2_reverseClock;
var text_5;
var key_resp_t2_Practice;
var Feedback_t2_reverseClock;
var fb_7;
var Instruction08Clock;
var Instruction_08;
var key_resp_8;
var Practice_t2Clock;
var text_6;
var key_resp_t2;
var Feedback_t2Clock;
var fb_6;
var EndClock;
var text_norm;
var key_instruct;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instruction01"
  Instruction01Clock = new util.Clock();
  Instruction_01 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_01', units : undefined, 
    image : 'picture/Instruction01.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Instruction1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction02"
  Instruction02Clock = new util.Clock();
  Instruction_02 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_02', units : undefined, 
    image : 'picture/Instruction02.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Instruction2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Fix"
  FixClock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Practice_iso"
  Practice_isoClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_iso = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback_iso_Practice"
  Feedback_iso_PracticeClock = new util.Clock();
  fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instruction03"
  Instruction03Clock = new util.Clock();
  Instruction_03 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_03', units : undefined, 
    image : 'picture/Instruction03.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Practic_ipn"
  Practic_ipnClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_ipn = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback_ipn_Practice"
  Feedback_ipn_PracticeClock = new util.Clock();
  fb_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instruction04"
  Instruction04Clock = new util.Clock();
  Instruction_04 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_04', units : undefined, 
    image : 'picture/Instruction04.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Practice_t1"
  Practice_t1Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_t1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback_t1"
  Feedback_t1Clock = new util.Clock();
  fb_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instruction05"
  Instruction05Clock = new util.Clock();
  Instruction_05 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_05', units : undefined, 
    image : 'picture/Instruction05.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction06"
  Instruction06Clock = new util.Clock();
  Instruction_06 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_06', units : undefined, 
    image : 'picture/Instruction06.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Practice_iso_reverse"
  Practice_iso_reverseClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_iso_reverse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback_iso_reverse"
  Feedback_iso_reverseClock = new util.Clock();
  fb_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instruction07"
  Instruction07Clock = new util.Clock();
  Instruction_07 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_07', units : undefined, 
    image : 'picture/Instruction07.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Practice_t2_reverse"
  Practice_t2_reverseClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_t2_Practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback_t2_reverse"
  Feedback_t2_reverseClock = new util.Clock();
  fb_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instruction08"
  Instruction08Clock = new util.Clock();
  Instruction_08 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_08', units : undefined, 
    image : 'picture/Instruction08.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Practice_t2"
  Practice_t2Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_t2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback_t2"
  Feedback_t2Clock = new util.Clock();
  fb_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  text_norm = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm',
    text: '感谢参与实验\n祝生活愉快！\n\n按空格结束实验',
    font: 'Arial',
    units: 'norm', 
    pos: [0.7, (- 0.1)], height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instruct = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from text_align
  // Code component set to Both
  text_norm.setAlignHoriz('left')
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _Instruction1_allKeys;
var Instruction01Components;
function Instruction01RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction01' ---
    t = 0;
    Instruction01Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction01.started', globalClock.getTime());
    Instruction1.keys = undefined;
    Instruction1.rt = undefined;
    _Instruction1_allKeys = [];
    // keep track of which components have finished
    Instruction01Components = [];
    Instruction01Components.push(Instruction_01);
    Instruction01Components.push(Instruction1);
    
    for (const thisComponent of Instruction01Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction01RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction01' ---
    // get current time
    t = Instruction01Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_01* updates
    if (t >= 0.0 && Instruction_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_01.tStart = t;  // (not accounting for frame time here)
      Instruction_01.frameNStart = frameN;  // exact frame index
      
      Instruction_01.setAutoDraw(true);
    }
    
    
    // *Instruction1* updates
    if (t >= 0.0 && Instruction1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction1.tStart = t;  // (not accounting for frame time here)
      Instruction1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruction1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruction1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruction1.clearEvents(); });
    }
    
    if (Instruction1.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruction1.getKeys({keyList: ['space'], waitRelease: false});
      _Instruction1_allKeys = _Instruction1_allKeys.concat(theseKeys);
      if (_Instruction1_allKeys.length > 0) {
        Instruction1.keys = _Instruction1_allKeys[_Instruction1_allKeys.length - 1].name;  // just the last key pressed
        Instruction1.rt = _Instruction1_allKeys[_Instruction1_allKeys.length - 1].rt;
        Instruction1.duration = _Instruction1_allKeys[_Instruction1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction01Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction01RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction01' ---
    for (const thisComponent of Instruction01Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction01.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Instruction1.corr, level);
    }
    psychoJS.experiment.addData('Instruction1.keys', Instruction1.keys);
    if (typeof Instruction1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instruction1.rt', Instruction1.rt);
        psychoJS.experiment.addData('Instruction1.duration', Instruction1.duration);
        routineTimer.reset();
        }
    
    Instruction1.stop();
    // the Routine "Instruction01" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Instruction2_allKeys;
var Instruction02Components;
function Instruction02RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction02' ---
    t = 0;
    Instruction02Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction02.started', globalClock.getTime());
    Instruction2.keys = undefined;
    Instruction2.rt = undefined;
    _Instruction2_allKeys = [];
    // keep track of which components have finished
    Instruction02Components = [];
    Instruction02Components.push(Instruction_02);
    Instruction02Components.push(Instruction2);
    
    for (const thisComponent of Instruction02Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction02RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction02' ---
    // get current time
    t = Instruction02Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_02* updates
    if (t >= 0.0 && Instruction_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_02.tStart = t;  // (not accounting for frame time here)
      Instruction_02.frameNStart = frameN;  // exact frame index
      
      Instruction_02.setAutoDraw(true);
    }
    
    
    // *Instruction2* updates
    if (t >= 0.0 && Instruction2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction2.tStart = t;  // (not accounting for frame time here)
      Instruction2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruction2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruction2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruction2.clearEvents(); });
    }
    
    if (Instruction2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruction2.getKeys({keyList: ['space'], waitRelease: false});
      _Instruction2_allKeys = _Instruction2_allKeys.concat(theseKeys);
      if (_Instruction2_allKeys.length > 0) {
        Instruction2.keys = _Instruction2_allKeys[_Instruction2_allKeys.length - 1].name;  // just the last key pressed
        Instruction2.rt = _Instruction2_allKeys[_Instruction2_allKeys.length - 1].rt;
        Instruction2.duration = _Instruction2_allKeys[_Instruction2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction02Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction02RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction02' ---
    for (const thisComponent of Instruction02Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction02.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Instruction2.corr, level);
    }
    psychoJS.experiment.addData('Instruction2.keys', Instruction2.keys);
    if (typeof Instruction2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instruction2.rt', Instruction2.rt);
        psychoJS.experiment.addData('Instruction2.duration', Instruction2.duration);
        routineTimer.reset();
        }
    
    Instruction2.stop();
    // the Routine "Instruction02" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Practice_01;
function Practice_01LoopBegin(Practice_01LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Practice_01 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Loop/Practice_iso.xlsx',
      seed: undefined, name: 'Practice_01'
    });
    psychoJS.experiment.addLoop(Practice_01); // add the loop to the experiment
    currentLoop = Practice_01;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_01 of Practice_01) {
      snapshot = Practice_01.getSnapshot();
      Practice_01LoopScheduler.add(importConditions(snapshot));
      Practice_01LoopScheduler.add(FixRoutineBegin(snapshot));
      Practice_01LoopScheduler.add(FixRoutineEachFrame());
      Practice_01LoopScheduler.add(FixRoutineEnd(snapshot));
      Practice_01LoopScheduler.add(Practice_isoRoutineBegin(snapshot));
      Practice_01LoopScheduler.add(Practice_isoRoutineEachFrame());
      Practice_01LoopScheduler.add(Practice_isoRoutineEnd(snapshot));
      Practice_01LoopScheduler.add(Feedback_iso_PracticeRoutineBegin(snapshot));
      Practice_01LoopScheduler.add(Feedback_iso_PracticeRoutineEachFrame());
      Practice_01LoopScheduler.add(Feedback_iso_PracticeRoutineEnd(snapshot));
      Practice_01LoopScheduler.add(Practice_01LoopEndIteration(Practice_01LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Practice_01LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Practice_01);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Practice_01LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Practice_02;
function Practice_02LoopBegin(Practice_02LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Practice_02 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Loop/Practice_ipn.xlsx',
      seed: undefined, name: 'Practice_02'
    });
    psychoJS.experiment.addLoop(Practice_02); // add the loop to the experiment
    currentLoop = Practice_02;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_02 of Practice_02) {
      snapshot = Practice_02.getSnapshot();
      Practice_02LoopScheduler.add(importConditions(snapshot));
      Practice_02LoopScheduler.add(FixRoutineBegin(snapshot));
      Practice_02LoopScheduler.add(FixRoutineEachFrame());
      Practice_02LoopScheduler.add(FixRoutineEnd(snapshot));
      Practice_02LoopScheduler.add(Practic_ipnRoutineBegin(snapshot));
      Practice_02LoopScheduler.add(Practic_ipnRoutineEachFrame());
      Practice_02LoopScheduler.add(Practic_ipnRoutineEnd(snapshot));
      Practice_02LoopScheduler.add(Feedback_ipn_PracticeRoutineBegin(snapshot));
      Practice_02LoopScheduler.add(Feedback_ipn_PracticeRoutineEachFrame());
      Practice_02LoopScheduler.add(Feedback_ipn_PracticeRoutineEnd(snapshot));
      Practice_02LoopScheduler.add(Practice_02LoopEndIteration(Practice_02LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Practice_02LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Practice_02);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Practice_02LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Practice_T1;
function Practice_T1LoopBegin(Practice_T1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Practice_T1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Loop/Practice_t1.xlsx',
      seed: undefined, name: 'Practice_T1'
    });
    psychoJS.experiment.addLoop(Practice_T1); // add the loop to the experiment
    currentLoop = Practice_T1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_T1 of Practice_T1) {
      snapshot = Practice_T1.getSnapshot();
      Practice_T1LoopScheduler.add(importConditions(snapshot));
      Practice_T1LoopScheduler.add(FixRoutineBegin(snapshot));
      Practice_T1LoopScheduler.add(FixRoutineEachFrame());
      Practice_T1LoopScheduler.add(FixRoutineEnd(snapshot));
      Practice_T1LoopScheduler.add(Practice_t1RoutineBegin(snapshot));
      Practice_T1LoopScheduler.add(Practice_t1RoutineEachFrame());
      Practice_T1LoopScheduler.add(Practice_t1RoutineEnd(snapshot));
      Practice_T1LoopScheduler.add(Feedback_t1RoutineBegin(snapshot));
      Practice_T1LoopScheduler.add(Feedback_t1RoutineEachFrame());
      Practice_T1LoopScheduler.add(Feedback_t1RoutineEnd(snapshot));
      Practice_T1LoopScheduler.add(Practice_T1LoopEndIteration(Practice_T1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Practice_T1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Practice_T1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Practice_T1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Formal_T1;
function Formal_T1LoopBegin(Formal_T1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Formal_T1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Loop/Practice_t1.xlsx',
      seed: undefined, name: 'Formal_T1'
    });
    psychoJS.experiment.addLoop(Formal_T1); // add the loop to the experiment
    currentLoop = Formal_T1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFormal_T1 of Formal_T1) {
      snapshot = Formal_T1.getSnapshot();
      Formal_T1LoopScheduler.add(importConditions(snapshot));
      Formal_T1LoopScheduler.add(FixRoutineBegin(snapshot));
      Formal_T1LoopScheduler.add(FixRoutineEachFrame());
      Formal_T1LoopScheduler.add(FixRoutineEnd(snapshot));
      Formal_T1LoopScheduler.add(Practice_t1RoutineBegin(snapshot));
      Formal_T1LoopScheduler.add(Practice_t1RoutineEachFrame());
      Formal_T1LoopScheduler.add(Practice_t1RoutineEnd(snapshot));
      Formal_T1LoopScheduler.add(Feedback_t1RoutineBegin(snapshot));
      Formal_T1LoopScheduler.add(Feedback_t1RoutineEachFrame());
      Formal_T1LoopScheduler.add(Feedback_t1RoutineEnd(snapshot));
      Formal_T1LoopScheduler.add(Formal_T1LoopEndIteration(Formal_T1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Formal_T1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Formal_T1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Formal_T1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Practice_iso_Reverse;
function Practice_iso_ReverseLoopBegin(Practice_iso_ReverseLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Practice_iso_Reverse = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Loop/Practice_iso _reverse.xlsx',
      seed: undefined, name: 'Practice_iso_Reverse'
    });
    psychoJS.experiment.addLoop(Practice_iso_Reverse); // add the loop to the experiment
    currentLoop = Practice_iso_Reverse;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_iso_Reverse of Practice_iso_Reverse) {
      snapshot = Practice_iso_Reverse.getSnapshot();
      Practice_iso_ReverseLoopScheduler.add(importConditions(snapshot));
      Practice_iso_ReverseLoopScheduler.add(FixRoutineBegin(snapshot));
      Practice_iso_ReverseLoopScheduler.add(FixRoutineEachFrame());
      Practice_iso_ReverseLoopScheduler.add(FixRoutineEnd(snapshot));
      Practice_iso_ReverseLoopScheduler.add(Practice_iso_reverseRoutineBegin(snapshot));
      Practice_iso_ReverseLoopScheduler.add(Practice_iso_reverseRoutineEachFrame());
      Practice_iso_ReverseLoopScheduler.add(Practice_iso_reverseRoutineEnd(snapshot));
      Practice_iso_ReverseLoopScheduler.add(Feedback_iso_reverseRoutineBegin(snapshot));
      Practice_iso_ReverseLoopScheduler.add(Feedback_iso_reverseRoutineEachFrame());
      Practice_iso_ReverseLoopScheduler.add(Feedback_iso_reverseRoutineEnd(snapshot));
      Practice_iso_ReverseLoopScheduler.add(Practice_iso_ReverseLoopEndIteration(Practice_iso_ReverseLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Practice_iso_ReverseLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Practice_iso_Reverse);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Practice_iso_ReverseLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Practice_t2_Reverse;
function Practice_t2_ReverseLoopBegin(Practice_t2_ReverseLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Practice_t2_Reverse = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Loop/Practice_t2.xlsx',
      seed: undefined, name: 'Practice_t2_Reverse'
    });
    psychoJS.experiment.addLoop(Practice_t2_Reverse); // add the loop to the experiment
    currentLoop = Practice_t2_Reverse;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_t2_Reverse of Practice_t2_Reverse) {
      snapshot = Practice_t2_Reverse.getSnapshot();
      Practice_t2_ReverseLoopScheduler.add(importConditions(snapshot));
      Practice_t2_ReverseLoopScheduler.add(FixRoutineBegin(snapshot));
      Practice_t2_ReverseLoopScheduler.add(FixRoutineEachFrame());
      Practice_t2_ReverseLoopScheduler.add(FixRoutineEnd(snapshot));
      Practice_t2_ReverseLoopScheduler.add(Practice_t2_reverseRoutineBegin(snapshot));
      Practice_t2_ReverseLoopScheduler.add(Practice_t2_reverseRoutineEachFrame());
      Practice_t2_ReverseLoopScheduler.add(Practice_t2_reverseRoutineEnd(snapshot));
      Practice_t2_ReverseLoopScheduler.add(Feedback_t2_reverseRoutineBegin(snapshot));
      Practice_t2_ReverseLoopScheduler.add(Feedback_t2_reverseRoutineEachFrame());
      Practice_t2_ReverseLoopScheduler.add(Feedback_t2_reverseRoutineEnd(snapshot));
      Practice_t2_ReverseLoopScheduler.add(Practice_t2_ReverseLoopEndIteration(Practice_t2_ReverseLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Practice_t2_ReverseLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Practice_t2_Reverse);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Practice_t2_ReverseLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Formal_t2_reverse;
function Formal_t2_reverseLoopBegin(Formal_t2_reverseLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Formal_t2_reverse = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Loop/Practice_t2.xlsx',
      seed: undefined, name: 'Formal_t2_reverse'
    });
    psychoJS.experiment.addLoop(Formal_t2_reverse); // add the loop to the experiment
    currentLoop = Formal_t2_reverse;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFormal_t2_reverse of Formal_t2_reverse) {
      snapshot = Formal_t2_reverse.getSnapshot();
      Formal_t2_reverseLoopScheduler.add(importConditions(snapshot));
      Formal_t2_reverseLoopScheduler.add(FixRoutineBegin(snapshot));
      Formal_t2_reverseLoopScheduler.add(FixRoutineEachFrame());
      Formal_t2_reverseLoopScheduler.add(FixRoutineEnd(snapshot));
      Formal_t2_reverseLoopScheduler.add(Practice_t2RoutineBegin(snapshot));
      Formal_t2_reverseLoopScheduler.add(Practice_t2RoutineEachFrame());
      Formal_t2_reverseLoopScheduler.add(Practice_t2RoutineEnd(snapshot));
      Formal_t2_reverseLoopScheduler.add(Feedback_t2RoutineBegin(snapshot));
      Formal_t2_reverseLoopScheduler.add(Feedback_t2RoutineEachFrame());
      Formal_t2_reverseLoopScheduler.add(Feedback_t2RoutineEnd(snapshot));
      Formal_t2_reverseLoopScheduler.add(Formal_t2_reverseLoopEndIteration(Formal_t2_reverseLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Formal_t2_reverseLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Formal_t2_reverse);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Formal_t2_reverseLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var FixComponents;
function FixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fix' ---
    t = 0;
    FixClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Fix.started', globalClock.getTime());
    // keep track of which components have finished
    FixComponents = [];
    FixComponents.push(fix);
    
    for (const thisComponent of FixComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FixRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fix' ---
    // get current time
    t = FixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FixComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fix' ---
    for (const thisComponent of FixComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Fix.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_iso_allKeys;
var Practice_isoComponents;
function Practice_isoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Practice_iso' ---
    t = 0;
    Practice_isoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Practice_iso.started', globalClock.getTime());
    text.setText(Words);
    key_resp_iso.keys = undefined;
    key_resp_iso.rt = undefined;
    _key_resp_iso_allKeys = [];
    // keep track of which components have finished
    Practice_isoComponents = [];
    Practice_isoComponents.push(text);
    Practice_isoComponents.push(key_resp_iso);
    
    for (const thisComponent of Practice_isoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Practice_isoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Practice_iso' ---
    // get current time
    t = Practice_isoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    
    // *key_resp_iso* updates
    if (t >= 0.0 && key_resp_iso.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_iso.tStart = t;  // (not accounting for frame time here)
      key_resp_iso.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_iso.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_iso.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_iso.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_iso.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_iso.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_iso.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_iso.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _key_resp_iso_allKeys = _key_resp_iso_allKeys.concat(theseKeys);
      if (_key_resp_iso_allKeys.length > 0) {
        key_resp_iso.keys = _key_resp_iso_allKeys[_key_resp_iso_allKeys.length - 1].name;  // just the last key pressed
        key_resp_iso.rt = _key_resp_iso_allKeys[_key_resp_iso_allKeys.length - 1].rt;
        key_resp_iso.duration = _key_resp_iso_allKeys[_key_resp_iso_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_iso.keys == ans) {
            key_resp_iso.corr = 1;
        } else {
            key_resp_iso.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Practice_isoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_isoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Practice_iso' ---
    for (const thisComponent of Practice_isoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Practice_iso.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_iso.keys === undefined) {
      if (['None','none',undefined].includes(ans)) {
         key_resp_iso.corr = 1;  // correct non-response
      } else {
         key_resp_iso.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_iso.corr, level);
    }
    psychoJS.experiment.addData('key_resp_iso.keys', key_resp_iso.keys);
    psychoJS.experiment.addData('key_resp_iso.corr', key_resp_iso.corr);
    if (typeof key_resp_iso.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_iso.rt', key_resp_iso.rt);
        psychoJS.experiment.addData('key_resp_iso.duration', key_resp_iso.duration);
        routineTimer.reset();
        }
    
    key_resp_iso.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fb_text;
var fb_col;
var Feedback_iso_PracticeComponents;
function Feedback_iso_PracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback_iso_Practice' ---
    t = 0;
    Feedback_iso_PracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback_iso_Practice.started', globalClock.getTime());
    // Run 'Begin Routine' code from fb_code
    fb_text = "no key_resp component found - look at the Std out window for info";
    fb_col = "black";
    try {
        if (key_resp_iso.corr) {
            fb_text = "\u6b63\u786e\uff01";
            fb_col = "green";
        } else {
            fb_text = "\u9519\u8bef";
            fb_col = "red";
        }
    } catch(e) {
        console.log("Make sure that you have:\n1. a routine with a keyboard component in it called \"key_resp\"\n 2. In the key_Resp component in the \"data\" tab select \"Store Correct\".\n in the \"Correct answer\" field use \"$corrAns\" (where corrAns is a column header in your conditions file indicating the correct key press");
    }
    
    fb.setColor(new util.Color(fb_col));
    fb.setText(fb_text);
    // keep track of which components have finished
    Feedback_iso_PracticeComponents = [];
    Feedback_iso_PracticeComponents.push(fb);
    
    for (const thisComponent of Feedback_iso_PracticeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Feedback_iso_PracticeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback_iso_Practice' ---
    // get current time
    t = Feedback_iso_PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb* updates
    if (t >= 0.0 && fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb.tStart = t;  // (not accounting for frame time here)
      fb.frameNStart = frameN;  // exact frame index
      
      fb.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Feedback_iso_PracticeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Feedback_iso_PracticeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback_iso_Practice' ---
    for (const thisComponent of Feedback_iso_PracticeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback_iso_Practice.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var Instruction03Components;
function Instruction03RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction03' ---
    t = 0;
    Instruction03Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction03.started', globalClock.getTime());
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Instruction03Components = [];
    Instruction03Components.push(Instruction_03);
    Instruction03Components.push(key_resp_3);
    
    for (const thisComponent of Instruction03Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction03RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction03' ---
    // get current time
    t = Instruction03Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_03* updates
    if (t >= 0.0 && Instruction_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_03.tStart = t;  // (not accounting for frame time here)
      Instruction_03.frameNStart = frameN;  // exact frame index
      
      Instruction_03.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction03Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction03RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction03' ---
    for (const thisComponent of Instruction03Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction03.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Instruction03" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_ipn_allKeys;
var Practic_ipnComponents;
function Practic_ipnRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Practic_ipn' ---
    t = 0;
    Practic_ipnClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Practic_ipn.started', globalClock.getTime());
    text_2.setText(Words_ipn);
    key_resp_ipn.keys = undefined;
    key_resp_ipn.rt = undefined;
    _key_resp_ipn_allKeys = [];
    // keep track of which components have finished
    Practic_ipnComponents = [];
    Practic_ipnComponents.push(text_2);
    Practic_ipnComponents.push(key_resp_ipn);
    
    for (const thisComponent of Practic_ipnComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Practic_ipnRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Practic_ipn' ---
    // get current time
    t = Practic_ipnClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    
    // *key_resp_ipn* updates
    if (t >= 0.0 && key_resp_ipn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_ipn.tStart = t;  // (not accounting for frame time here)
      key_resp_ipn.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_ipn.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ipn.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ipn.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_ipn.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_ipn.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_ipn.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_ipn.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _key_resp_ipn_allKeys = _key_resp_ipn_allKeys.concat(theseKeys);
      if (_key_resp_ipn_allKeys.length > 0) {
        key_resp_ipn.keys = _key_resp_ipn_allKeys[_key_resp_ipn_allKeys.length - 1].name;  // just the last key pressed
        key_resp_ipn.rt = _key_resp_ipn_allKeys[_key_resp_ipn_allKeys.length - 1].rt;
        key_resp_ipn.duration = _key_resp_ipn_allKeys[_key_resp_ipn_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_ipn.keys == ans_ipn) {
            key_resp_ipn.corr = 1;
        } else {
            key_resp_ipn.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Practic_ipnComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practic_ipnRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Practic_ipn' ---
    for (const thisComponent of Practic_ipnComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Practic_ipn.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_ipn.keys === undefined) {
      if (['None','none',undefined].includes(ans_ipn)) {
         key_resp_ipn.corr = 1;  // correct non-response
      } else {
         key_resp_ipn.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_ipn.corr, level);
    }
    psychoJS.experiment.addData('key_resp_ipn.keys', key_resp_ipn.keys);
    psychoJS.experiment.addData('key_resp_ipn.corr', key_resp_ipn.corr);
    if (typeof key_resp_ipn.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_ipn.rt', key_resp_ipn.rt);
        psychoJS.experiment.addData('key_resp_ipn.duration', key_resp_ipn.duration);
        routineTimer.reset();
        }
    
    key_resp_ipn.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Feedback_ipn_PracticeComponents;
function Feedback_ipn_PracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback_ipn_Practice' ---
    t = 0;
    Feedback_ipn_PracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback_ipn_Practice.started', globalClock.getTime());
    // Run 'Begin Routine' code from fb_code_3
    fb_text = "no key_resp component found - look at the Std out window for info";
    fb_col = "black";
    try {
        if (key_resp_ipn.corr) {
            fb_text = "\u6b63\u786e\uff01";
            fb_col = "green";
        } else {
            fb_text = "\u9519\u8bef";
            fb_col = "red";
        }
    } catch(e) {
        console.log("Make sure that you have:\n1. a routine with a keyboard component in it called \"key_resp\"\n 2. In the key_Resp component in the \"data\" tab select \"Store Correct\".\n in the \"Correct answer\" field use \"$corrAns\" (where corrAns is a column header in your conditions file indicating the correct key press");
    }
    
    fb_3.setColor(new util.Color(fb_col));
    fb_3.setText(fb_text);
    // keep track of which components have finished
    Feedback_ipn_PracticeComponents = [];
    Feedback_ipn_PracticeComponents.push(fb_3);
    
    for (const thisComponent of Feedback_ipn_PracticeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Feedback_ipn_PracticeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback_ipn_Practice' ---
    // get current time
    t = Feedback_ipn_PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_3* updates
    if (t >= 0.0 && fb_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_3.tStart = t;  // (not accounting for frame time here)
      fb_3.frameNStart = frameN;  // exact frame index
      
      fb_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fb_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Feedback_ipn_PracticeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Feedback_ipn_PracticeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback_ipn_Practice' ---
    for (const thisComponent of Feedback_ipn_PracticeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback_ipn_Practice.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var Instruction04Components;
function Instruction04RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction04' ---
    t = 0;
    Instruction04Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction04.started', globalClock.getTime());
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    Instruction04Components = [];
    Instruction04Components.push(Instruction_04);
    Instruction04Components.push(key_resp_4);
    
    for (const thisComponent of Instruction04Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction04RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction04' ---
    // get current time
    t = Instruction04Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_04* updates
    if (t >= 0.0 && Instruction_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_04.tStart = t;  // (not accounting for frame time here)
      Instruction_04.frameNStart = frameN;  // exact frame index
      
      Instruction_04.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction04Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction04RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction04' ---
    for (const thisComponent of Instruction04Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction04.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "Instruction04" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_t1_allKeys;
var Practice_t1Components;
function Practice_t1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Practice_t1' ---
    t = 0;
    Practice_t1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Practice_t1.started', globalClock.getTime());
    text_3.setText(Words_t1);
    key_resp_t1.keys = undefined;
    key_resp_t1.rt = undefined;
    _key_resp_t1_allKeys = [];
    // keep track of which components have finished
    Practice_t1Components = [];
    Practice_t1Components.push(text_3);
    Practice_t1Components.push(key_resp_t1);
    
    for (const thisComponent of Practice_t1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Practice_t1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Practice_t1' ---
    // get current time
    t = Practice_t1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    
    // *key_resp_t1* updates
    if (t >= 0.0 && key_resp_t1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_t1.tStart = t;  // (not accounting for frame time here)
      key_resp_t1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_t1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t1.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_t1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_t1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_t1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_t1.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _key_resp_t1_allKeys = _key_resp_t1_allKeys.concat(theseKeys);
      if (_key_resp_t1_allKeys.length > 0) {
        key_resp_t1.keys = _key_resp_t1_allKeys[_key_resp_t1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_t1.rt = _key_resp_t1_allKeys[_key_resp_t1_allKeys.length - 1].rt;
        key_resp_t1.duration = _key_resp_t1_allKeys[_key_resp_t1_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_t1.keys == ans_t1) {
            key_resp_t1.corr = 1;
        } else {
            key_resp_t1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Practice_t1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_t1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Practice_t1' ---
    for (const thisComponent of Practice_t1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Practice_t1.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_t1.keys === undefined) {
      if (['None','none',undefined].includes(ans_t1)) {
         key_resp_t1.corr = 1;  // correct non-response
      } else {
         key_resp_t1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_t1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_t1.keys', key_resp_t1.keys);
    psychoJS.experiment.addData('key_resp_t1.corr', key_resp_t1.corr);
    if (typeof key_resp_t1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_t1.rt', key_resp_t1.rt);
        psychoJS.experiment.addData('key_resp_t1.duration', key_resp_t1.duration);
        routineTimer.reset();
        }
    
    key_resp_t1.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Feedback_t1Components;
function Feedback_t1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback_t1' ---
    t = 0;
    Feedback_t1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback_t1.started', globalClock.getTime());
    // Run 'Begin Routine' code from fb_code_2
    fb_text = "no key_resp component found - look at the Std out window for info";
    fb_col = "black";
    try {
        if (key_resp_t1.corr) {
            fb_text = "\u6b63\u786e\uff01";
            fb_col = "green";
        } else {
            fb_text = "\u9519\u8bef";
            fb_col = "red";
        }
    } catch(e) {
        console.log("Make sure that you have:\n1. a routine with a keyboard component in it called \"key_resp\"\n 2. In the key_Resp component in the \"data\" tab select \"Store Correct\".\n in the \"Correct answer\" field use \"$corrAns\" (where corrAns is a column header in your conditions file indicating the correct key press");
    }
    
    fb_2.setColor(new util.Color(fb_col));
    fb_2.setText(fb_text);
    // keep track of which components have finished
    Feedback_t1Components = [];
    Feedback_t1Components.push(fb_2);
    
    for (const thisComponent of Feedback_t1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Feedback_t1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback_t1' ---
    // get current time
    t = Feedback_t1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_2* updates
    if (t >= 0.0 && fb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_2.tStart = t;  // (not accounting for frame time here)
      fb_2.frameNStart = frameN;  // exact frame index
      
      fb_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fb_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Feedback_t1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Feedback_t1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback_t1' ---
    for (const thisComponent of Feedback_t1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback_t1.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var Instruction05Components;
function Instruction05RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction05' ---
    t = 0;
    Instruction05Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction05.started', globalClock.getTime());
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    Instruction05Components = [];
    Instruction05Components.push(Instruction_05);
    Instruction05Components.push(key_resp_5);
    
    for (const thisComponent of Instruction05Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction05RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction05' ---
    // get current time
    t = Instruction05Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_05* updates
    if (t >= 0.0 && Instruction_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_05.tStart = t;  // (not accounting for frame time here)
      Instruction_05.frameNStart = frameN;  // exact frame index
      
      Instruction_05.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction05Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction05RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction05' ---
    for (const thisComponent of Instruction05Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction05.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "Instruction05" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var Instruction06Components;
function Instruction06RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction06' ---
    t = 0;
    Instruction06Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction06.started', globalClock.getTime());
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    Instruction06Components = [];
    Instruction06Components.push(Instruction_06);
    Instruction06Components.push(key_resp_6);
    
    for (const thisComponent of Instruction06Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction06RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction06' ---
    // get current time
    t = Instruction06Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_06* updates
    if (t >= 0.0 && Instruction_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_06.tStart = t;  // (not accounting for frame time here)
      Instruction_06.frameNStart = frameN;  // exact frame index
      
      Instruction_06.setAutoDraw(true);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction06Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction06RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction06' ---
    for (const thisComponent of Instruction06Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction06.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "Instruction06" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_iso_reverse_allKeys;
var Practice_iso_reverseComponents;
function Practice_iso_reverseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Practice_iso_reverse' ---
    t = 0;
    Practice_iso_reverseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Practice_iso_reverse.started', globalClock.getTime());
    text_4.setText(Words);
    key_resp_iso_reverse.keys = undefined;
    key_resp_iso_reverse.rt = undefined;
    _key_resp_iso_reverse_allKeys = [];
    // keep track of which components have finished
    Practice_iso_reverseComponents = [];
    Practice_iso_reverseComponents.push(text_4);
    Practice_iso_reverseComponents.push(key_resp_iso_reverse);
    
    for (const thisComponent of Practice_iso_reverseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Practice_iso_reverseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Practice_iso_reverse' ---
    // get current time
    t = Practice_iso_reverseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    
    // *key_resp_iso_reverse* updates
    if (t >= 0.0 && key_resp_iso_reverse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_iso_reverse.tStart = t;  // (not accounting for frame time here)
      key_resp_iso_reverse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_iso_reverse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_iso_reverse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_iso_reverse.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_iso_reverse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_iso_reverse.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_iso_reverse.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_iso_reverse.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _key_resp_iso_reverse_allKeys = _key_resp_iso_reverse_allKeys.concat(theseKeys);
      if (_key_resp_iso_reverse_allKeys.length > 0) {
        key_resp_iso_reverse.keys = _key_resp_iso_reverse_allKeys[_key_resp_iso_reverse_allKeys.length - 1].name;  // just the last key pressed
        key_resp_iso_reverse.rt = _key_resp_iso_reverse_allKeys[_key_resp_iso_reverse_allKeys.length - 1].rt;
        key_resp_iso_reverse.duration = _key_resp_iso_reverse_allKeys[_key_resp_iso_reverse_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_iso_reverse.keys == ans) {
            key_resp_iso_reverse.corr = 1;
        } else {
            key_resp_iso_reverse.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Practice_iso_reverseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_iso_reverseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Practice_iso_reverse' ---
    for (const thisComponent of Practice_iso_reverseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Practice_iso_reverse.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_iso_reverse.keys === undefined) {
      if (['None','none',undefined].includes(ans)) {
         key_resp_iso_reverse.corr = 1;  // correct non-response
      } else {
         key_resp_iso_reverse.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_iso_reverse.corr, level);
    }
    psychoJS.experiment.addData('key_resp_iso_reverse.keys', key_resp_iso_reverse.keys);
    psychoJS.experiment.addData('key_resp_iso_reverse.corr', key_resp_iso_reverse.corr);
    if (typeof key_resp_iso_reverse.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_iso_reverse.rt', key_resp_iso_reverse.rt);
        psychoJS.experiment.addData('key_resp_iso_reverse.duration', key_resp_iso_reverse.duration);
        routineTimer.reset();
        }
    
    key_resp_iso_reverse.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Feedback_iso_reverseComponents;
function Feedback_iso_reverseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback_iso_reverse' ---
    t = 0;
    Feedback_iso_reverseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback_iso_reverse.started', globalClock.getTime());
    // Run 'Begin Routine' code from fb_code_4
    fb_text = "no key_resp component found - look at the Std out window for info";
    fb_col = "black";
    try {
        if (key_resp_iso_reverse.corr) {
            fb_text = "\u6b63\u786e\uff01";
            fb_col = "green";
        } else {
            fb_text = "\u9519\u8bef";
            fb_col = "red";
        }
    } catch(e) {
        console.log("Make sure that you have:\n1. a routine with a keyboard component in it called \"key_resp\"\n 2. In the key_Resp component in the \"data\" tab select \"Store Correct\".\n in the \"Correct answer\" field use \"$corrAns\" (where corrAns is a column header in your conditions file indicating the correct key press");
    }
    
    fb_4.setColor(new util.Color(fb_col));
    fb_4.setText(fb_text);
    // keep track of which components have finished
    Feedback_iso_reverseComponents = [];
    Feedback_iso_reverseComponents.push(fb_4);
    
    for (const thisComponent of Feedback_iso_reverseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Feedback_iso_reverseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback_iso_reverse' ---
    // get current time
    t = Feedback_iso_reverseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_4* updates
    if (t >= 0.0 && fb_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_4.tStart = t;  // (not accounting for frame time here)
      fb_4.frameNStart = frameN;  // exact frame index
      
      fb_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fb_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_4.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Feedback_iso_reverseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Feedback_iso_reverseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback_iso_reverse' ---
    for (const thisComponent of Feedback_iso_reverseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback_iso_reverse.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_7_allKeys;
var Instruction07Components;
function Instruction07RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction07' ---
    t = 0;
    Instruction07Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction07.started', globalClock.getTime());
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    Instruction07Components = [];
    Instruction07Components.push(Instruction_07);
    Instruction07Components.push(key_resp_7);
    
    for (const thisComponent of Instruction07Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction07RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction07' ---
    // get current time
    t = Instruction07Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_07* updates
    if (t >= 0.0 && Instruction_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_07.tStart = t;  // (not accounting for frame time here)
      Instruction_07.frameNStart = frameN;  // exact frame index
      
      Instruction_07.setAutoDraw(true);
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction07Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction07RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction07' ---
    for (const thisComponent of Instruction07Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction07.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "Instruction07" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_t2_Practice_allKeys;
var Practice_t2_reverseComponents;
function Practice_t2_reverseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Practice_t2_reverse' ---
    t = 0;
    Practice_t2_reverseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Practice_t2_reverse.started', globalClock.getTime());
    text_5.setText(Words_t2);
    key_resp_t2_Practice.keys = undefined;
    key_resp_t2_Practice.rt = undefined;
    _key_resp_t2_Practice_allKeys = [];
    // keep track of which components have finished
    Practice_t2_reverseComponents = [];
    Practice_t2_reverseComponents.push(text_5);
    Practice_t2_reverseComponents.push(key_resp_t2_Practice);
    
    for (const thisComponent of Practice_t2_reverseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Practice_t2_reverseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Practice_t2_reverse' ---
    // get current time
    t = Practice_t2_reverseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    
    // *key_resp_t2_Practice* updates
    if (t >= 0.0 && key_resp_t2_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_t2_Practice.tStart = t;  // (not accounting for frame time here)
      key_resp_t2_Practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_t2_Practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t2_Practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t2_Practice.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_t2_Practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_t2_Practice.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_t2_Practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_t2_Practice.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _key_resp_t2_Practice_allKeys = _key_resp_t2_Practice_allKeys.concat(theseKeys);
      if (_key_resp_t2_Practice_allKeys.length > 0) {
        key_resp_t2_Practice.keys = _key_resp_t2_Practice_allKeys[_key_resp_t2_Practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_t2_Practice.rt = _key_resp_t2_Practice_allKeys[_key_resp_t2_Practice_allKeys.length - 1].rt;
        key_resp_t2_Practice.duration = _key_resp_t2_Practice_allKeys[_key_resp_t2_Practice_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_t2_Practice.keys == ans_t2) {
            key_resp_t2_Practice.corr = 1;
        } else {
            key_resp_t2_Practice.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Practice_t2_reverseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_t2_reverseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Practice_t2_reverse' ---
    for (const thisComponent of Practice_t2_reverseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Practice_t2_reverse.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_t2_Practice.keys === undefined) {
      if (['None','none',undefined].includes(ans_t2)) {
         key_resp_t2_Practice.corr = 1;  // correct non-response
      } else {
         key_resp_t2_Practice.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_t2_Practice.corr, level);
    }
    psychoJS.experiment.addData('key_resp_t2_Practice.keys', key_resp_t2_Practice.keys);
    psychoJS.experiment.addData('key_resp_t2_Practice.corr', key_resp_t2_Practice.corr);
    if (typeof key_resp_t2_Practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_t2_Practice.rt', key_resp_t2_Practice.rt);
        psychoJS.experiment.addData('key_resp_t2_Practice.duration', key_resp_t2_Practice.duration);
        routineTimer.reset();
        }
    
    key_resp_t2_Practice.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Feedback_t2_reverseComponents;
function Feedback_t2_reverseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback_t2_reverse' ---
    t = 0;
    Feedback_t2_reverseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback_t2_reverse.started', globalClock.getTime());
    // Run 'Begin Routine' code from fb_code_7
    fb_text = "no key_resp component found - look at the Std out window for info";
    fb_col = "black";
    try {
        if (key_resp_t2_Practice.corr) {
            fb_text = "\u6b63\u786e\uff01";
            fb_col = "green";
        } else {
            fb_text = "\u9519\u8bef";
            fb_col = "red";
        }
    } catch(e) {
        console.log("Make sure that you have:\n1. a routine with a keyboard component in it called \"key_resp\"\n 2. In the key_Resp component in the \"data\" tab select \"Store Correct\".\n in the \"Correct answer\" field use \"$corrAns\" (where corrAns is a column header in your conditions file indicating the correct key press");
    }
    
    fb_7.setColor(new util.Color(fb_col));
    fb_7.setText(fb_text);
    // keep track of which components have finished
    Feedback_t2_reverseComponents = [];
    Feedback_t2_reverseComponents.push(fb_7);
    
    for (const thisComponent of Feedback_t2_reverseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Feedback_t2_reverseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback_t2_reverse' ---
    // get current time
    t = Feedback_t2_reverseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_7* updates
    if (t >= 0.0 && fb_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_7.tStart = t;  // (not accounting for frame time here)
      fb_7.frameNStart = frameN;  // exact frame index
      
      fb_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fb_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_7.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Feedback_t2_reverseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Feedback_t2_reverseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback_t2_reverse' ---
    for (const thisComponent of Feedback_t2_reverseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback_t2_reverse.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var Instruction08Components;
function Instruction08RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction08' ---
    t = 0;
    Instruction08Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction08.started', globalClock.getTime());
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    Instruction08Components = [];
    Instruction08Components.push(Instruction_08);
    Instruction08Components.push(key_resp_8);
    
    for (const thisComponent of Instruction08Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction08RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction08' ---
    // get current time
    t = Instruction08Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_08* updates
    if (t >= 0.0 && Instruction_08.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_08.tStart = t;  // (not accounting for frame time here)
      Instruction_08.frameNStart = frameN;  // exact frame index
      
      Instruction_08.setAutoDraw(true);
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction08Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction08RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction08' ---
    for (const thisComponent of Instruction08Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction08.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "Instruction08" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_t2_allKeys;
var Practice_t2Components;
function Practice_t2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Practice_t2' ---
    t = 0;
    Practice_t2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Practice_t2.started', globalClock.getTime());
    text_6.setText(Words_t2);
    key_resp_t2.keys = undefined;
    key_resp_t2.rt = undefined;
    _key_resp_t2_allKeys = [];
    // keep track of which components have finished
    Practice_t2Components = [];
    Practice_t2Components.push(text_6);
    Practice_t2Components.push(key_resp_t2);
    
    for (const thisComponent of Practice_t2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Practice_t2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Practice_t2' ---
    // get current time
    t = Practice_t2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    
    // *key_resp_t2* updates
    if (t >= 0.0 && key_resp_t2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_t2.tStart = t;  // (not accounting for frame time here)
      key_resp_t2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_t2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t2.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_t2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_t2.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_t2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_t2.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _key_resp_t2_allKeys = _key_resp_t2_allKeys.concat(theseKeys);
      if (_key_resp_t2_allKeys.length > 0) {
        key_resp_t2.keys = _key_resp_t2_allKeys[_key_resp_t2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_t2.rt = _key_resp_t2_allKeys[_key_resp_t2_allKeys.length - 1].rt;
        key_resp_t2.duration = _key_resp_t2_allKeys[_key_resp_t2_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_t2.keys == ans_t2) {
            key_resp_t2.corr = 1;
        } else {
            key_resp_t2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Practice_t2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_t2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Practice_t2' ---
    for (const thisComponent of Practice_t2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Practice_t2.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_t2.keys === undefined) {
      if (['None','none',undefined].includes(ans_t2)) {
         key_resp_t2.corr = 1;  // correct non-response
      } else {
         key_resp_t2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_t2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_t2.keys', key_resp_t2.keys);
    psychoJS.experiment.addData('key_resp_t2.corr', key_resp_t2.corr);
    if (typeof key_resp_t2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_t2.rt', key_resp_t2.rt);
        psychoJS.experiment.addData('key_resp_t2.duration', key_resp_t2.duration);
        routineTimer.reset();
        }
    
    key_resp_t2.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Feedback_t2Components;
function Feedback_t2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback_t2' ---
    t = 0;
    Feedback_t2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback_t2.started', globalClock.getTime());
    // Run 'Begin Routine' code from fb_code_6
    fb_text = "no key_resp component found - look at the Std out window for info";
    fb_col = "black";
    try {
        if (key_resp_t2.corr) {
            fb_text = "\u6b63\u786e\uff01";
            fb_col = "green";
        } else {
            fb_text = "\u9519\u8bef";
            fb_col = "red";
        }
    } catch(e) {
        console.log("Make sure that you have:\n1. a routine with a keyboard component in it called \"key_resp\"\n 2. In the key_Resp component in the \"data\" tab select \"Store Correct\".\n in the \"Correct answer\" field use \"$corrAns\" (where corrAns is a column header in your conditions file indicating the correct key press");
    }
    
    fb_6.setColor(new util.Color(fb_col));
    fb_6.setText(fb_text);
    // keep track of which components have finished
    Feedback_t2Components = [];
    Feedback_t2Components.push(fb_6);
    
    for (const thisComponent of Feedback_t2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Feedback_t2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback_t2' ---
    // get current time
    t = Feedback_t2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_6* updates
    if (t >= 0.0 && fb_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_6.tStart = t;  // (not accounting for frame time here)
      fb_6.frameNStart = frameN;  // exact frame index
      
      fb_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fb_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Feedback_t2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Feedback_t2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback_t2' ---
    for (const thisComponent of Feedback_t2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback_t2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_instruct_allKeys;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    key_instruct.keys = undefined;
    key_instruct.rt = undefined;
    _key_instruct_allKeys = [];
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(text_norm);
    EndComponents.push(key_instruct);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_norm* updates
    if (t >= 0.0 && text_norm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_norm.tStart = t;  // (not accounting for frame time here)
      text_norm.frameNStart = frameN;  // exact frame index
      
      text_norm.setAutoDraw(true);
    }
    
    
    // *key_instruct* updates
    if (t >= 0.0 && key_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instruct.tStart = t;  // (not accounting for frame time here)
      key_instruct.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instruct.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instruct.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instruct.clearEvents(); });
    }
    
    if (key_instruct.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instruct.getKeys({keyList: ['space'], waitRelease: false});
      _key_instruct_allKeys = _key_instruct_allKeys.concat(theseKeys);
      if (_key_instruct_allKeys.length > 0) {
        key_instruct.keys = _key_instruct_allKeys[0].name;  // just the first key pressed
        key_instruct.rt = _key_instruct_allKeys[0].rt;
        key_instruct.duration = _key_instruct_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instruct.corr, level);
    }
    psychoJS.experiment.addData('key_instruct.keys', key_instruct.keys);
    if (typeof key_instruct.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instruct.rt', key_instruct.rt);
        psychoJS.experiment.addData('key_instruct.duration', key_instruct.duration);
        routineTimer.reset();
        }
    
    key_instruct.stop();
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
