let fps = 60, interval = 1000 / fps,                // /
    now, then = Date.now(), savedTime = Date.now(), // | FPS Checker
    delta, conter = 0;                              // \

let verdict = fps * 0.4;
    
let is_Perfect = false;
let is_P_press = false;
let Start = true;
let Black_Screen = document.querySelector("div1");
let Close = document.querySelector("div2");
let Yap = document.querySelector("div3");
let Fin = false;
let Fin_frame = 0;
let Perfect = false;
let P = 1;
let P_frame = 0;
let P_State = 1;
let GFAP_State = true;
let GFAP_Frame = 0;
let press_J_to_close = false;
let is_J_press = false;
let End_T = false;
let Title_Count = 1;
let Title_Screen_frame = 0;
let save_frame = 0;
let Result = "NY";
let Start_Show_Score = false;
let Show_Result = false;
let Showed_Score = 0;
let Score_wait = 0;
let J_frame = 100;
let Pause = true;
let Auto = false;
let TXT = false;
let canvas;
let ctx;
let add = 0;
let score = 0;
let is_order_changed = false;
let order = 0;
let last_frame = 0;
let frame = 0;
let together = false;
let Count = 0;

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = 954;
canvas.height = 468;
document.body.appendChild(canvas);
let BG, Idle1, Idle2, Just1, Just2, Just3, Just4, Just5, Sad1, Sad2, SuperReady, Super1, Super2, Super3;

let in_frame = [];
let skipped_frame = [];

let is_A_press = false;
let IS_is_Input_Stop_SET = true;
let is_Input_Start = true;
let is_Input_Stop = true;

let TX = 240;
let TY = 240;
let Teacher_Pose = 0;
let Teacher_State = [1355, 2750, 3715, 4140, 4640, 5105];
let Teacher_Sound = ["Super", "Super", "Down", "Super", "Down", "Down"];

let K1_Wrong = false;

if (!Auto) {
	K1_Wrong = true;
}

let K1S = "Idle";
let K1P = 0;
let K1X = 380;
let K1Y = 55;
let K1_Sound_State = "Ap";
let K1_Start = [750, 1215, 1410, 1685, 2145, 2375, 2805, 2975, 3020, 3540, 4005, 4195, 4465, 4935, 5300];
let K1_Stop = [780, 1245, 1440, 1710, 2175, 2495, 2845, 2990, 3050, 3745, 4030, 4225, 4670, 5135, 5310];
let K1_Sound = ["Ep", "Ep", "Super", "Ep", "Ep", "G", "Super", "Bp", "Bp", "Ep", "Ep", "Super", "Ep", "Ep", "G"];   //Super = C & Super

let K2_Wrong = false;

if (!Auto) {
	K2_Wrong = true;
}

let K2S = "Idle";
let K2P = 0;
let K2X = 530;
let K2Y = 80;
let K2_Sound_State = "Ap";
let K2_Start = [810, 1275, 1410, 1745, 2205, 2495, 2805, 3090, 3135, 3600, 4060, 4195, 4520, 4990, 5330];
let K2_Stop = [840, 1305, 1440, 1770, 2235, 2615, 2845, 3105, 3165, 3745, 4085, 4225, 4670, 5135, 5340];
let K2_Sound = ["G", "G", "Super", "G", "G", "Gp", "Super", "Bp", "Bp", "G", "G", "Super", "G", "G", "G"];

let K3S = "";

if (!Auto) {
	K3S = "Just";
} else {
	K3S = "Idle";
}

if (Auto) {
	press_J_to_close = true;
	J_frame = 0;
}

let K3P = 0;
let K3X = 680;
let K3Y = 105;
let K3_Sound_State = "Ap";
let K3_Start = [870, 1335, 1410, 1805, 2265, 2615, 2805, 3205, 3250, 3660, 4115, 4195, 4585, 5050, 5360];
let K3_Stop = [900, 1365, 1440, 1830, 2295, 2735, 2845, 3220, 3280, 3745, 4140, 4225, 4670, 5135, 5370];
let K3_Sound = ["Bp", "Bp", "Super", "Bp", "Bp", "Ep", "Super", "Bp", "Bp", "Bp", "Bp", "Super", "Bp", "Bp", "G"];

let RK3_Start = [];
let RK3_Stop = [];
for (let i = 0; i < K3_Start.length; i++) {
    RK3_Start[i] = K3_Start[i] - verdict;
}
for (let i = 0; i < K3_Stop.length; i++) {
    RK3_Stop[i] = K3_Stop[i] - verdict;
}

let keysDown = {};
function setKeyboardListener() {
    document.addEventListener("keydown", function (event) {
        keysDown[event.keyCode] = true;
    });
    document.addEventListener("keyup", function (event) {
        delete keysDown[event.keyCode];

		if (event.keyCode === 13) {
			if (Start && !Auto) {
				K3_Play_Sound();
			}

			Start = false;
		}
		
		if (event.keyCode === 32) {
			if (!press_J_to_close) {
				J_frame = 120;
			}
			
			if (is_A_press) {
				K3_Play_Sound();

                if (P_State !== 5) {
                    P_State = 2;
                }
			}
			
			if (K3_Sound_State === "Super") {
				K3S = "Super";
			} else {
				K3S = "Just";
			}

            if (is_A_press) {
                if (is_Input_Start) {
                    K1_Wrong = true;
                    K2_Wrong = true;
                } else {
                    RK3_Start.splice(order - 1, 1, frame);
                    is_Input_Start = true;
                }
            }
			
			is_A_press = false;
		}
		//console.log(event.keyCode);
    });
}

function update() {
	if (32 in keysDown) {
		if (!press_J_to_close) {
			J_frame--;
		}
		
		if (!press_J_to_close && J_frame === 0) {
			press_J_to_close = true;
		}

        if (!is_A_press) {
            if (is_Input_Stop) {
                K1_Wrong = true;
                K2_Wrong = true;
            } else {
                RK3_Stop.splice(order - 1, 1, frame);
                is_Input_Stop = true;
            }
        }
		
		if (!is_A_press) {
			K3_Pause_Sound();

            if (P_State !== 5) {
                P_State = 2;
            }
		}
		
		if (1390 <= frame && frame < 1410 || 2785 <= frame && frame < 2805 || 4175 <= frame && frame < 4195) {
			K3S = "Super_Ready";
		} else {
			K3S = "Idle";
		}
		
        is_A_press = true;
	}

	last_frame = frame;
	frame = parseInt(In_Game_Music.currentTime * fps);
	
	if (last_frame + 1 < frame && frame <= last_frame + fps * 0.05) {
            frame = last_frame + 1;
	}

	//if (frame !== in_frame[in_frame.length - 1]) {
	//	if (frame - 1 !== in_frame[in_frame.length - 1]) {
	//		skipped_frame.push(frame - 1);
	//	}
	//	in_frame.push(frame);
	//}
}

function K1_2_Play_Sound(Sound_State) {
	if (Sound_State === "D") {
		D.play();
	}
	if (Sound_State === "C") {
		C.play();
	}
	if (Sound_State === "B") {
		B.play();
	}
	if (Sound_State === "Bp") {
		Bp.play();
	}
	if (Sound_State === "A") {
		A.play();
	}
	if (Sound_State === "Ap") {
		Ap.play();
	}
	if (Sound_State === "G") {
		G.play();
	}
	if (Sound_State === "Gp") {
		Gp.play();
	}
	if (Sound_State === "F") {
		F.play();
	}
	if (Sound_State === "E") {
		E.play();
	}
	if (Sound_State === "Ep") {
		Ep.play();
	}
	if (Sound_State === "DD") {
		DD.play();
	}
	if (Sound_State === "Super") {
		C.play();
		Super_Sound.play();
	}
}

function K1_2_Pause_Sound(Sound_State) {
	if (Sound_State === "D") {
		D.pause();
		D.currentTime = 0;
	}
	if (Sound_State === "C") {
		C.pause();
		C.currentTime = 0;
	}
	if (Sound_State === "B") {
		B.pause();
		B.currentTime = 0;
	}
	if (Sound_State === "Bp") {
		Bp.pause();
		Bp.currentTime = 0;
	}
	if (Sound_State === "A") {
		A.pause();
		A.currentTime = 0;
	}
	if (Sound_State === "Ap") {
		Ap.pause();
		Ap.currentTime = 0;
	}
	if (Sound_State === "G") {
		G.pause();
		G.currentTime = 0;
	}
	if (Sound_State === "Gp") {
		Gp.pause();
		Gp.currentTime = 0;
	}
	if (Sound_State === "F") {
		F.pause();
		F.currentTime = 0;
	}
	if (Sound_State === "E") {
		E.pause();
		E.currentTime = 0;
	}
	if (Sound_State === "Ep") {
		Ep.pause();
		Ep.currentTime = 0;
	}
	if (Sound_State === "DD") {
		DD.pause();
		DD.currentTime = 0;
	}
	if (Sound_State === "Super") {
		C.pause();
		C.currentTime = 0;
	}

	Zip.play();
}

function K3_Play_Sound() {
	Ap.pause();
	Ap.currentTime = 0;

	if (K3_Sound_State === "D") {
		D.play();
	}
	if (K3_Sound_State === "C") {
		C_P.play();
	}
	if (K3_Sound_State === "B") {
		B.play();
	}
	if (K3_Sound_State === "Bp") {
		Bp_P.play();
	}
	if (K3_Sound_State === "A") {
		A.play();
	}
	if (K3_Sound_State === "Ap") {
		Ap.play();
	}
	if (K3_Sound_State === "G") {
		G_P.play();
	}
	if (K3_Sound_State === "Gp") {
		Gp.play();
	}
	if (K3_Sound_State === "F") {
		F.play();
	}
	if (K3_Sound_State === "E") {
		E.play();
	}
	if (K3_Sound_State === "Ep") {
		Ep_P.play();
	}
	if (K3_Sound_State === "DD") {
		DD.play();
	}
	if (K3_Sound_State === "Super") {
		C_P.play();
		Super_P_Sound.play();
	}
	
}

function K3_Pause_Sound() {
	Ap.pause();
	Ap.currentTime = 0;
	C_P.pause();
	C_P.currentTime = 0;
	Bp_P.pause();
	Bp_P.currentTime = 0;
	G_P.pause();
	G_P.currentTime = 0;
	Ep_P.pause();
	Ep_P.currentTime = 0;
		
	if (!Fin) {
		Zip.play();
	}
}

function Sound_endless() {
	if (D.currentTime >= 0.7) {
		D.pause();
		D.currentTime = 0.4;
		D.play();
	}
	if (C.currentTime >= 0.7) {
		C.pause();
		C.currentTime = 0.4;
		C.play();
	}
	if (C_P.currentTime >= 0.7) {
		C_P.pause();
		C_P.currentTime = 0.4;
		C_P.play();
	}
	if (B.currentTime >= 0.7) {
		B.pause();
		B.currentTime = 0.4;
		B.play();
	}
	if (Bp.currentTime >= 0.7) {
		Bp.pause();
		Bp.currentTime = 0.4;
		Bp.play();
	}
	if (Bp_P.currentTime >= 0.7) {
		Bp_P.pause();
		Bp_P.currentTime = 0.4;
		Bp_P.play();
	}
	if (A.currentTime >= 0.7) {
		A.pause();
		A.currentTime = 0.4;
		A.play();
	}
	if (Ap.currentTime >= 0.7) {
		Ap.pause();
		Ap.currentTime = 0.4;
		Ap.play();
	}
	if (G.currentTime >= 0.7) {
		G.pause();
		G.currentTime = 0.4;
		G.play();
	}
	if (G_P.currentTime >= 0.7) {
		G_P.pause();
		G_P.currentTime = 0.4;
		G_P.play();
	}
	if (Gp.currentTime >= 0.7) {
		Gp.pause();
		Gp.currentTime = 0.4;
		Gp.play();
	}
	if (F.currentTime >= 0.7) {
		F.pause();
		F.currentTime = 0.4;
		F.play();
	}
	if (E.currentTime >= 0.7) {
		E.pause();
		E.currentTime = 0.4;
		E.play();
	}
	if (Ep.currentTime >= 0.7) {
		Ep.pause();
		Ep.currentTime = 0.4;
		Ep.play();
	}
	if (Ep_P.currentTime >= 0.7) {
		Ep_P.pause();
		Ep_P.currentTime = 0.4;
		Ep_P.play();
	}
	if (DD.currentTime >= 0.7) {
		DD.pause();
		DD.currentTime = 0.4;
		DD.play();
	}
}

function Kids_moves() {
	if (frame === 1390 || frame === 2785 || frame === 4175) {
		K1S = "Super_Ready";
		K2S = "Super_Ready";
	}
	for (let i = 0; i < Teacher_State.length; i++) {
		if (frame === Teacher_State[i]) {
			if (Teacher_Sound[i] === "Super") {
				Together_EN.play();
			}else if (Teacher_Sound[i] === "Down") {
				Down_EN.play();
				Haik_EN.play();

				Teacher_Pose = 2;
			}
		}
	}

	for (let i = 0; i < Teacher_State.length; i++) {
		if (frame === Teacher_State[i] + 30) {
			if (Teacher_Sound[i] === "Down") {
				Tok_EN.play();

				Teacher_Pose = 6;
			}
		}
	}

	for (let i = 0; i < Teacher_State.length; i++) {
		if (frame === Teacher_State[i] + 60) {
			if (Teacher_Sound[i] === "Down") {
				Teacher_Pose = 0;
			}
		}
	}

	for (let i = 0; i < K1_Start.length; i++) {
		if (frame === K1_Start[i]) {
			K1_Sound_State = K1_Sound[i];
			
			if (K1_Sound_State === "Super") {
				K1S = "Super";
			} else {
				K1S = "Just";
			}

			K1_2_Play_Sound(K1_Sound_State);
		}
	}
	for (let i = 0; i < K1_Stop.length; i++) {
		if (frame === K1_Stop[i]) {
			K1S = "Idle";
			K1_2_Pause_Sound(K1_Sound_State);
		}
	}

	for (let i = 0; i < K2_Start.length; i++) {
		if (frame === K2_Start[i]) {
			K2_Sound_State = K2_Sound[i];

			if (K2_Sound_State === "Super") {
				K2S = "Super";
			} else {
				K2S = "Just";
			}

			K1_2_Play_Sound(K2_Sound_State);
		}
	}
	for (let i = 0; i < K2_Stop.length; i++) {
		if (frame === K2_Stop[i]) {
			K2S = "Idle";
			K1_2_Pause_Sound(K2_Sound_State);
		}
	}
	
    if (!is_order_changed) {
        if (K3_Start[order] - verdict <= frame && frame <= K3_Stop[order] + verdict) {
            IS_is_Input_Stop_SET = false;
            is_Input_Start = false;
            is_Input_Stop = true;
            is_order_changed = true;
            order++;
        }
    } else {        
        if (frame > K3_Stop[order - 1] + verdict) {  
            if (!is_Input_Stop) {
                K1_Wrong = true;
                K2_Wrong = true;

                is_Input_Stop = true;
            }
            
            IS_is_Input_Stop_SET = true;
            is_Input_Start = true;
            is_order_changed = false;
        } else if (frame > K3_Start[order - 1] + verdict) {
            if (!is_Input_Start) {
                K1_Wrong = true;
                K2_Wrong = true;

                is_Input_Start = true;
            }

            if (!IS_is_Input_Stop_SET) {
                is_Input_Stop = false;

                IS_is_Input_Stop_SET = true;
            }

            is_order_changed = true;
        }
	}
		

	if (Auto) {
		for (let i = 0; i < K3_Start.length; i++) {
			if (frame === K3_Start[i]) {
				K3_Sound_State = K3_Sound[i];

				if (K3_Sound_State === "Super") {
					K3S = "Super";
				} else {
					K3S = "Just";
				}
			
				K3_Play_Sound();
			}
		}
		for (let i = 0; i < K3_Stop.length; i++) {
			if (frame === K3_Stop[i]) {
				if (frame === 1390 || frame === 2785 || frame === 4175) {
					K3S = "Super_Ready";
				} else {
					K3S = "Idle";
				}
				
				K3_Pause_Sound();
			}
		}
	} else {
		if (is_order_changed) {
			K3_Sound_State = K3_Sound[order - 1];
		} else {
			K3_Sound_State = "Ap";
		}
	}
}

function Set_score() {
	add = 0;

    let num = 0;

	for (let i = 0; i < K3_Start.length; i++) {
		num += (1 - Math.abs(K3_Start[i] - RK3_Start[i]) / (verdict)) * 100;
	}
	for (let i = 0; i < K3_Stop.length; i++) {
		num += (1 - Math.abs(K3_Stop[i] - RK3_Stop[i]) / (verdict)) * 100;
	}

    if (num > 0) {
        add += num;
    }

	score = add;
}

function Kids_State() {
	Count++;

	if (Count >= 5) {
		K1P = K_State(K1S, K1P, K1_Wrong)[0];
        K1_Wrong &= K_State(K1S, K1P, K1_Wrong)[1];

		K2P = K_State(K2S, K2P, K2_Wrong)[0];
		K2_Wrong &= K_State(K2S, K2P, K2_Wrong)[1];
        
        K3_State();
		Teacher();

		Count = 0;
	}
}

function Teacher() {
	if (Teacher_Pose === 0) {
		Teacher_Pose = 1;
	}else if (Teacher_Pose === 1) {
		Teacher_Pose = 0;
	}else if (Teacher_Pose === 2) {
		Teacher_Pose = 3;
	}else if (Teacher_Pose === 3) {
		Teacher_Pose = 4;
	}else if (Teacher_Pose === 4) {
		Teacher_Pose = 5;
	}else if (Teacher_Pose === 6) {
		Teacher_Pose = 7;
	}else if (Teacher_Pose === 7) {
		Teacher_Pose = 8;
	}
}

function Teacher_render() {
	if (Teacher_Pose === 0) {
		ctx.drawImage(T1, TX, TY);
	}
	if (Teacher_Pose === 1) {
		ctx.drawImage(T2, TX, TY);
	}
	if (Teacher_Pose === 2 || Teacher_Pose === 3) {
		ctx.drawImage(T3, TX - 40, TY - 30);
	}
	if (Teacher_Pose === 4) {
		ctx.drawImage(T4, TX - 60, TY - 35);
	}
	if (Teacher_Pose === 5) {
		ctx.drawImage(T5, TX - 40, TY - 30);
	}
	if (Teacher_Pose === 6 || Teacher_Pose === 7) {
		ctx.drawImage(T6, TX, TY - 10);
	}
	if (Teacher_Pose === 8) {
		ctx.drawImage(T7, TX, TY);
	}
}

function K_State(KS, KP, K_Wrong) {
	if (KS === "Idle") {
		if (KP === 0 || KP === 7 || KP >= 13) {
			if (!K_Wrong) {
				return [1, true];
			} else {
			    return [8, true];
			}
		}else if (KP === 1 || KP === 8) {
			if (!K_Wrong) {
				return [0, true];
			} else {
				return [7, true];
			}
		}else if (KP === 2) {
			return [1, true];
		}else if (KP === 3) {
			return [2, true];
		}else if (KP === 4 || KP === 5 || KP === 6) {
			return [3, true];
		}else if (KP === 10 || KP === 11 || KP === 12) {
			return [6, true];
		}
	}
	
	if (KS === "Just") {		
		if (KP === 0) {
			return [1, false];
		}else if (KP === 1) {
			return [2, false];
		}else if (KP === 2) {
			return [3, false];
		}else if (KP === 3) {
			return [4, false];
		}else if (KP === 4) {
			return [5, false];
		}else if (KP === 5) {
			return [6, false];
		}else if (KP === 6) {
			return [4, false];
		}else if (KP === 7 || KP === 8 || KP >= 13) {
			return [0, false];
		}
	}
	
	if (KS === "Super") {		
		if (KP === 0) {
			return [1, false];
		}else if (KP === 1) {
			return [2, false];
		}else if (KP === 2) {
			return [3, false];
		}else if (KP === 3) {
			return [4, false];
		}else if (KP === 4) {
			return [10, false];
		}else if (KP === 10) {
			return [11, false];
		}else if (KP === 11) {
			return [12, false];
		}else if (KP === 12) {
			return [10, false];
		}else if (KP === 7 || KP === 8 || KP >= 13) {
			return [0, false];
		}
	}

	if (KS === "Super_Ready") {		
		if (KP <= 12 || KP === 15) {
			return [13, false];
		}else if (KP === 13) {
			return [14, false];
		}else if (KP === 14) {
			return [15, false];
		}
	}
}

function K3_State() {
	if (K3S === "Idle") {
		if (K3P === 0 || K3P >= 13) {
			K3P = 1;
		}else if (K3P === 1) {
			K3P = 0;
		}else if (K3P === 2) {
			K3P = 1;
		}else if (K3P === 3) {
			K3P = 2;
		}else if (K3P === 4 || K3P === 5 || K3P === 6) {
			K3P = 3;
		}else if (K3P === 10 || K3P === 11 || K3P === 12) {
			K3P = 6;
		}
	}
	
	if (K3S === "Just") {
		if (K3P === 0 || K3P >= 13) {
			K3P = 1;
		}else if (K3P === 1) {
			K3P = 2;
		}else if (K3P === 2) {
			K3P = 3;
		}else if (K3P === 3) {
			K3P = 4;
		}else if (K3P === 4) {
			K3P = 5;
		}else if (K3P === 5) {
			K3P = 6;
		}else if (K3P === 6) {
			K3P = 4;
		}
	}
	
	if (K3S === "Super") {
		if (K3P === 0 || K3P >= 13) {
			K3P = 1;
		}else if (K3P === 1) {
			K3P = 2;
		}else if (K3P === 2) {
			K3P = 3;
		}else if (K3P === 3) {
			K3P = 4;
		}else if (K3P === 4) {
			K3P = 10;
		}else if (K3P === 10) {
			K3P = 11;
		}else if (K3P === 11) {
			K3P = 12;
		}else if (K3P === 12) {
			K3P = 10;
		}
	}

	if (K3S === "Super_Ready") {
		if (K3P <= 12 || K3P === 15) {
			K3P = 13;
		}else if (K3P === 13) {
			K3P = 14;
		}else if (K3P === 14) {
			K3P = 15;
		}
	}
}

function Kid(KP, KX, KY) {
	if (KP === 0) {
		ctx.drawImage(Idle1, KX, KY);
	}
	if (KP === 1) {
		ctx.drawImage(Idle2, KX, KY);
	}
	if (KP === 2) {
		ctx.drawImage(Just1, KX, KY - 4);
	}
	if (KP === 3) {
		ctx.drawImage(Just2, KX, KY - 8);
	}
	if (KP === 4) {
		ctx.drawImage(Just3, KX, KY - 6);
	}
	if (KP === 5) {
		ctx.drawImage(Just4, KX, KY - 6);
	}
	if (KP === 6) {
		ctx.drawImage(Just5, KX, KY - 6);
	}
	if (KP === 7) {
		ctx.drawImage(Sad1, KX, KY);
	}
	if (KP === 8) {
		ctx.drawImage(Sad2, KX, KY);
	}
	if (KP === 10) {
		ctx.drawImage(Super1, KX, KY - 32);
	}
	if (KP === 11) {
		ctx.drawImage(Super2, KX, KY - 32);
	}
	if (KP === 12) {
		ctx.drawImage(Super3, KX, KY - 32);
	}
	if (KP === 13) {
		ctx.drawImage(SuperReady, KX, KY + 24);
	}
	if (KP === 14) {
		ctx.drawImage(SuperReady, KX, KY + 30);
	}
	if (KP === 15) {
		ctx.drawImage(SuperReady, KX + 6, KY + 24);
	}
}
		
function render() {
	Kids_moves();
	Kids_State();

	Kid(K1P, K1X, K1Y);
    Kid(K2P, K2X, K2Y);
    Kid(K3P, K3X, K3Y);

	Teacher_render();

	Set_score();

	if (Perfect) {
		if (P_State !== 5) {
			GFAP_Frame++;

			if (GFAP_Frame >= 30) {
				GFAP_State = !GFAP_State;

				GFAP_Frame = 0;
			}
		}

		if (GFAP_State) {
			ctx.drawImage(GFAP, 75, 30);
		}

		if (P_State === 1) {
			ctx.drawImage(P1, 25, 25);
		}else if (P_State === 2) {
			ctx.drawImage(P4, 25, 25);

			P_frame++;

			if (P_frame >= 3) {
				P_State++;

				P_frame = 0;
			}

		}else if (P_State === 3) {
			ctx.drawImage(P3, 25, 25);
			
			P_frame++;

			if (P_frame >= 3) {
				P_State++;

				P_frame = 0;
			}
			
		}else if (P_State === 4) {
			ctx.drawImage(P2, 25, 25);
			
			P_frame++;

			if (P_frame >= 3) {
				P_State = 1;

				P_frame = 0;
			}
			
		}else if (P_State === 5) {
			GFAP_State = false;

			if (P_frame === 0) {
				Perfect_Fail.play();
			}

			if (parseInt(P_frame / 5) % 2 === 0) {
				ctx.drawImage(P1, 25, 26);
				ctx.drawImage(PX, 20, 25);
			} else {
				ctx.drawImage(P1, 35, 26);
				ctx.drawImage(PX, 30, 25);
			}

			P_frame++;

			if (P_frame >= 50) {
				Perfect = false;

				P_frame = 0;
			}
		}
	}

	if (TXT) {
		ctx.fillStyle = "black";
		ctx.font = "32px RH";
		ctx.fillText(`order : ${order}`, 10, 50);
		ctx.fillText(`original score : ${add}`, 10, 100);
		ctx.fillText(`real score : ${score / (order * 2)}`, 10, 150);
	}
}

function main() {
    if (!Start && !Fin) {
		ctx.drawImage(BG, 0, 0);

		Black_Screen.style.animation = `fade-in 0.5s ease-in-out forwards`;
		
		if (press_J_to_close) {
			if (In_Game_Music.currentTime === 0) {
				Close.style.animation = `disappear_Close 0.25s ease-in-out forwards`;
				Yap.style.animation = `disappear_Yap 0.25s ease-in-out forwards`;

				if (is_Perfect) {
					Perfect = true;
				}
				
				K1_Wrong = false;
				K2_Wrong = false;

			    In_Game_Music.play();
			}
		} else {
			Close.style.animation = `appear_Close 0.25s ease-in-out forwards`;
			Yap.style.animation = `appear_Yap 0.25s ease-in-out forwards`;
		}

		if (frame >= fps * 92) {
			Black_Screen.style.animation = `fade-out 0.5s ease-in-out forwards`;
			Fin = true;
		}

		update();

		render();

		Sound_endless();

		if (Perfect && P_State !== 5) {
			if (K1_Wrong || K2_Wrong) {
				P_State = 5;
				P_frame = 0;
			}
		}

	} else {
		if (!Fin) {
			ctx.drawImage(Title_Screen, 0, 0);

			if (Title_Count === 1) {
				ctx.drawImage(Sin1, 240, 25);
			}else if (Title_Count === 2) {
				ctx.drawImage(Sin2, 240, 25);
			}else if (Title_Count === 3) {
				ctx.drawImage(Sin3, 240, 25);
			}
		
			Title_Screen_frame++;
	
			if (Title_Screen_frame >= 5) {
				Title_Count++;

				if (Title_Count >= 4) {
					Title_Count = 1;
				}

				Title_Screen_frame = 0;
			}

			ctx.strokeStyle = "white";
			ctx.lineWidth = 5;
			
			ctx.font = "25px RH"
			ctx.fillStyle = "#f74aff";
			ctx.strokeText(`Press 'P' to Go for a Perfect!`, 10, 450);
			ctx.fillText(`Press 'P' to Go for a Perfect!`, 10, 450);

			ctx.font = "50px RH"			
			ctx.fillStyle = "black";
			ctx.strokeText(`Press 'Enter' to Start!`, 250, 300);
			ctx.fillText(`Press 'Enter' to Start!`, 250, 300);

			if (80 in keysDown) {
				if (!is_P_press) {
					is_Perfect = !is_Perfect;
				}

				is_P_press = true;
			} else {
				is_P_press = false;
			}
			
			if (is_Perfect) {
				ctx.drawImage(P1, 300, 350);
				ctx.drawImage(GFAP, 350, 350);
			}
		} else {
			K3_Pause_Sound();

			Fin_frame++;
			
			if (Fin_frame >= 60) {
				if (Perfect) {
					save_frame++;

					if (Get_Perfect.currentTime === 0) {
						Get_Perfect.play();
					}

					ctx.drawImage(Perfect_Img, 0, 0);

					if (P === 1) {
						ctx.drawImage(PM1, 436, 80);
					}else if (P === 2) {
						ctx.drawImage(PM2, 436, 80);
					}else if (P === 3) {
						ctx.drawImage(PM3, 436, 80);
					}else if (P === 4) {
						ctx.drawImage(PM4, 436, 80);
					}else if (P === 5) {
						ctx.drawImage(PM5, 436, 80);
					}else if (P === 6) {
						ctx.drawImage(PM6, 436, 80);
					}

					if (save_frame >= 10) {
						P++;

						if (P >= 7) {
							P = 1;
						}

						save_frame = 0;
					}
				} else {
					ctx.drawImage(Non, 228, 339);
					
					if (Start_Show_Score) {
						Score_wait++;
						if (R_OH.currentTime === 0) {
							R_OH.play();
						}

						for (let i = -5; i <= Showed_Score; i += 5) {
							if (i < 300) {
								ctx.drawImage(LTS, i + 223, 339);
							}else if (i < 400) {
								ctx.drawImage(LTE, i + 223, 339);
							} else {
								ctx.drawImage(LTH, i + 223, 339);
							}
						}
						
						if (R_OH.currentTime >= 2.4) {
							R_OH.pause();
						}
						
						if (Score_wait >= 2) {
							if (score / (order * 2) * 5 > Showed_Score) {
								Showed_Score += 5;
							} else {
								R_OH.pause();
								
								if (!Show_Result) {
									R_OH_End.play();
									
									Show_Result = true;
								}
							}
							
							Score_wait = 0;
						}
					}

					if (Show_Result) {
						save_frame++;
					}
					
					if (save_frame >= 90 && !End_T) {
						if (Showed_Score < 300) {
							Result = "TA";

							if (R_TA_F.currentTime === 0) {
								R_TA_F.play();
							}

							if (R_TA_F.ended && R_TA_S.currentTime === 0) {
								R_TA_S.play();
							}
						}else if (Showed_Score < 400) {
							Result = "OK";
							
							if (R_OK_F.currentTime === 0) {
								R_OK_F.play();
							}

							if (R_OK_F.ended && R_OK_S.currentTime === 0) {
								R_OK_S.play();
							}
						} else {
							Result = "Superb";
							
							if (R_Superb_F.currentTime === 0) {
								R_Superb_F.play();
							}

							if (R_Superb_F.ended && R_Superb_S.currentTime === 0) {
								R_Superb_S.play();
							}
						}
					}
					
					if (End_T) {
						ctx.drawImage(BS, 0, 0);
					} else {
						ctx.drawImage(score_Img, 0, 0);
					}
					
					if (Fin_frame >= 120 && !End_T) {
						if (Fin_frame === 120) {
							R_F.play();
						}
				
						ctx.font = "50px RH"
						ctx.fillStyle = "#ff9c00";
						ctx.strokeStyle = "white";
						ctx.lineWidth = 5;
						ctx.strokeText(`Conductor's Notes`, 275, 65);
						ctx.fillText(`Conductor's Notes`, 275, 65);
					}
					
					ctx.fillStyle = "black";

					if (!End_T) {
						if (Math.round(score / (order * 2)) < 60) {
							if (Fin_frame >= 180) {
								if (Fin_frame === 180) {
									R_S.play();
								}
								
								ctx.fillText(`Your timing was off.`, 100, 150);
							}
							
							if (Fin_frame >= 240) {
								if (Fin_frame === 240) {
									R_T.play();
								}
								
								ctx.fillText(`Also...You didn't harmonize`, 100, 225);
								ctx.fillText(`with the others well.`, 100, 300);
							}
							
							if (Fin_frame >= 300) {
								Start_Show_Score = true;
							}
						}else if (Math.round(score / (order * 2)) < 80) {
							if (Fin_frame >= 180) {
								if (Fin_frame === 180) {
									R_T.play();
								}
								
								ctx.fillText(`Good enough...`, 100, 225);
							}
							
							if (Fin_frame >= 240) {
								Start_Show_Score = true;
							}
						} else {
							if (Fin_frame >= 180) {
								if (Fin_frame === 180) {
									R_S.play();
								}
								
								ctx.fillText(`Your timing was excellent.`, 100, 150);
							}
							
							if (Fin_frame >= 240) {
								if (Fin_frame === 240) {
									R_T.play();
								}
								
								ctx.fillText(`Also...You sang in good harmony!`, 100, 250);
							}
							
							if (Fin_frame >= 300) {
								Start_Show_Score = true;
							}
						}
					}
					
					ctx.font = "100px RH"
					if (Showed_Score < 300) {
						ctx.fillStyle = "#00b4ff";
					}else if (Showed_Score < 400) {
						ctx.fillStyle = "#00be00";
					} else {
						ctx.fillStyle = "#ff0102";
					}
					
					
					if (!End_T) {
						ctx.strokeStyle = "white";
						ctx.lineWidth = 5;
						ctx.strokeText(Showed_Score / 5, 450, 400);	
						ctx.fillText(Showed_Score / 5, 450, 400);

						if (Result === "TA") {
							ctx.drawImage(TA, 700, 300);
						}else if (Result === "OK") {
							ctx.drawImage(OK, 750, 250);
						}else if (Result === "Superb") {
							ctx.drawImage(Superb, 650, 325);
						}
						
						if (save_frame >= 150) {
							if (32 in keysDown) {
								if (!is_J_press) {
									B_P_S.play();
								}
	
								is_J_press = true;
	
								ctx.drawImage(B_P, 800, 54);
							} else {
								if (is_J_press) {
									B_N_S.play();
	
									End_T = true;
	
									save_frame = 0;
								}
	
								is_J_press = false;
	
								ctx.drawImage(B_N, 800, 50);
							}
						}
					}


					if (Result === "TA") {
						if (R_TA_S.ended) {
							End_T = true;
						}
					}else if (Result === "OK") {
						if (R_OK_S.ended) {
							End_T = true;
						}
					}else if (Result === "Superb") {
						if (R_Superb_S.ended) {
							End_T = true;
						}
					}

					if (End_T) {
						ctx.font = "50px RH"
						ctx.fillStyle = "black";
						ctx.strokeStyle = "white";
						ctx.lineWidth = 15;
						
						save_frame++;
						
						if (save_frame >= 60) {
							if (Result === "TA") {
								ctx.drawImage(R_TA_Screen, 162, 9);

								ctx.strokeText(`We are done!`, 350, 450);
								ctx.fillText(`We are done!`, 350, 450);
								
								if (R_TA_T.currentTime === 0) {
									R_TA_S.pause();
									R_TA_T.play();
								}
							}else if (Result === "OK") {
								ctx.drawImage(R_OK_Screen, 162, 9);

								ctx.strokeText(`That wasn't too bad.`, 275, 450);
								ctx.fillText(`That wasn't too bad.`, 275, 450);

								if (R_OK_T.currentTime === 0) {
									R_OK_S.pause();
									R_OK_T.play();
								}
							}else if (Result === "Superb") {
								ctx.drawImage(R_Superb_Screen, 162, 9);

								ctx.strokeText(`Nice teamwork!`, 300, 450);
								ctx.fillText(`Nice teamwork!`, 300, 450);
								
								if (R_Superb_T.currentTime === 0) {
									R_Superb_S.pause();
									R_Superb_T.play();
								}
							}
						}
					}
				}
				Black_Screen.style.animation = `fade-in 0.5s ease-in-out forwards`;
			}
		}
	}
}

loadAudio();
loadImage();
setKeyboardListener();

function runCodeWithFPS() {
    requestAnimationFrame(runCodeWithFPS);
    
    now = Date.now();
    delta = now - then;

    if (delta > interval) {
        then =  now - (delta % interval);

        main();
    }
}

runCodeWithFPS();