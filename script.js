	/*MODULES*/
	const fs = require('fs');
	const fuck = require('discord.js');
	const client = new fuck.Client();
	const WebSocket = require('ws');
	const fetch = require('node-fetch');
	const HttpsProxyAgent = require('https-proxy-agent');
	const axios = require('axios');
	const {createCanvas, Image, loadImage } = require("canvas");
	const Canvas = require('canvas');
	/*MODULES*/

	/*VARIABLES*/
	let proxy, backGround = new Image(), scale = 1,	LBBACK = CTI(create_leaderboard(1));
	var [dataEu1, dataEu2, dataEu3, dataEu4, dataNa1, dataNa2, dataNa3, dataNa4, dataTk, dataLegacyEu1, dataLegacyNa1, dataLegacyAs1,dataVampEu1, dataTeamMode] = [[], [],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var gameLeaderBoard = {translate: {x: 0, y: 0}, img: LBBACK, can: createCanvas(200, 400)};
	const canvas = createCanvas(200, 265), ctx = canvas.getContext('2d');
	var packetMsg = "__`Argument list for command` **`'.lb'`**`:`__\n `[eu1, eu2, eu3, eu4, na1, na2, na3, na4, tk1]`\n `[legacyEu, legacyNa, legacyAs]`\n `[vampEu]`\n `[teammode]`\n\n Lower Case and Upper case Letters are allowed: example `.lb LEGACYEU`";
	/*VARIABLES*/
	
	/*INIT*/
	Canvas.registerFont('./BalooPaaji.ttf',{family:'BalooPaaji'});
	backGround.src = './background.png';
	gameLeaderBoard.can.width = gameLeaderBoard.img.width;
	gameLeaderBoard.can.height = gameLeaderBoard.img.height;
	gameLeaderBoard.ctx = gameLeaderBoard.can.getContext("2d");
	/*INIT*/		
	
          

class socketFinder {
    constructor(sURL, type, key, agent){
        this.ws = new WebSocket(sURL, {agent:agent});
		const TYPE = type;
        this.ws.addEventListener("open", (data) => {this.ws.send(JSON.stringify(["ds.gg/pSauEbtMTe", 3480 ,2920 ,52, "ys#[O;x\>c[", "10250dxO0O" ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0, null, key]));});
        this.ws.on('message', function (msg) {
            switch(typeof msg) {
                case "string":
                var c = JSON.parse(msg);
                switch(c[0]) {
                    case 3:
					var lead = [21, 0];
                    var players = c[4].sort((a,b) => b.p - a.p);
					if(c[4].length >=11) {
					for(let i = 0; i < 10; i++) {
                        var player = players[i];
                        lead.push(player.i, player.p, player.n)
                    }
					} else {
						for(let i = 0; i < c[4].length; i++) {
                        var player = players[i];
                        lead.push(player.i, player.p, player.n)
                    }
					}
                    
                    var score, name, id, a = lead, top = 1, data = [];
						for(var e = 2; e < a.length; e += 3) {
						
						if(top == 1 ) {
						score = EZ_Score(a[e + 1]);
						id = a[e];
						name = a[e + 2];
						data.push({score, id, name})
						}
						else {
						score = EZ_Score(a[e + 1]);
						id = a[e];
						name = a[e + 2];
						data.push({score, id, name})
						}
					}
					
					var d = 200, e = 340, m = 10;
					ctx.clearRect(0, 0, 500, 500);
					ctx.drawImage(backGround, 0, 0);
					draw_leaderboard(data);
					drawAuth();
					const buffer = canvas.toBuffer('image/png');
					switch(TYPE){
						case "eu1":
						fs.writeFileSync('./images/EU1.png', buffer);
						dataEu1 = c[4].length;
						break;
						case "eu2":
						fs.writeFileSync('./images/EU2.png', buffer);
						dataEu2 = c[4].length;
						break;
						case "eu3":
						fs.writeFileSync('./images/EU3.png', buffer);
						dataEu3 = c[4].length;
						break;
						case "eu4":
						fs.writeFileSync('./images/EU4.png', buffer);
						dataEu4 = c[4].length;
						break;
						case "na1":
						fs.writeFileSync('./images/NA1.png', buffer);
						dataNa1 = c[4].length;
						break;
						case "na2":
						fs.writeFileSync('./images/NA2.png', buffer);
						dataNa2 = c[4].length;
						break;
						case "na3":
						fs.writeFileSync('./images/NA3.png', buffer);
						dataNa3 = c[4].length;
						break;
						case "na4":
						fs.writeFileSync('./images/NA4.png', buffer);
						dataNa4 = c[4].length;
						break;
						case "tk1":
						fs.writeFileSync('./images/TK1.png', buffer);
						dataTk = c[4].length;
						break;
						case "legacyeu1":
						fs.writeFileSync('./images/LEGACYEU.png', buffer);
						dataLegacyEu1 = c[4].length;
						break;
						case "legacyna1":
						fs.writeFileSync('./images/LEGACYNA.png', buffer);
						dataLegacyNa1 = c[4].length;
						break;
						case "legacyas1":
						fs.writeFileSync('./images/LEGACYAS.png', buffer);
						dataLegacyAs1 = c[4].length;
						break;
						case "vampeu1":
						fs.writeFileSync('./images/VAMPEU.png', buffer);
						dataVampEu1 = c[4].length;
						break;
						case "teammode":
						fs.writeFileSync('./images/TEAMMODE.png', buffer);
						dataTeamMode = c[4].length;
						break;
					}
					break;
					case 25:
					break;
                }; 
                break;
                default:
                break;
            } 
        });
        this.ws.on('error' , function error(err) { 

        });
		 this.ws.on('close' , function (data) {
        });
    };
};

var prefix = '.'
client.on('ready', () => {
	console.log('READY TO BOT!')
})
client.on('message', message => {
  
 if (!message.content.startsWith(prefix)) return;
 if(message.content.startsWith(prefix))  {
   
   if(!message.author.bot){
    const args = message.content.trim().split(/ +/g),cmd = args[0].slice(prefix.length).toLowerCase();
               if(cmd === "lb"){
				   if(message.channel.id != 864585644034752583) return (console.log('Wrong channel!', message.author.username), message.delete(), message.reply("You can use it only at here: discord.gg/pSauEbtMTe").then(msg => {setTimeout(() => {msg.delete()},15000)}))	
				   if(args[1]) {
                switch (args[1].toLowerCase()) {
                    case "eu1":
					send(message, "eu1", dataEu1);
                    break;
                    case "eu2":
					send(message, "eu2", dataEu2);
                    break;
                    case "eu3":
					send(message, "eu3", dataEu3);
					break;
					case "eu4":
					send(message, "eu4", dataEu4);
					break;
					case "na1":
					send(message, "na1", dataNa1);
					break;
					case "na2":
					send(message, "na2", dataNa2);
					break;
					case "na3":
					send(message, "na3", dataNa3);
					break;
					case "na4":
					send(message, "na4", dataNa4);
					break;
					case "tk1":
					send(message, "tk1", dataTk);
					break;
					case "legacyeu":
					send(message, "legacyeu", dataLegacyEu1);
					break;
					case "legacyna":
					send(message, "legacyna", dataLegacyNa1);
					break;
					case "legacyas":
					send(message, "legacyas", dataLegacyAs1);
					break;
					case "vampeu":
					send(message, "vampeu", dataVampEu1);
					break;
					case "teammode":
					send(message, "teammode", dataTeamMode);
					break;
					default:
					 message.reply(packetMsg).then(msg => {
					   setTimeout(() => {msg.delete()},10000)
					   })
					   message.delete();
					break;
                  }
				   } else {
					   message.reply(packetMsg).then(msg => {
					   setTimeout(() => {msg.delete()},10000)
					   })
					   message.delete();
				   }
           }
 }}
});

async function createBots(url, type) {
	proxies = (await axios.get('https://www.proxy-list.download/api/v1/get?type=http')).data.split("\r\n")
	botsNumber = 1800;
	for (let index = 0; index <= Math.min(4, botsNumber); index++) {
		botsNumber--;
		const agent = new HttpsProxyAgent('http://' + proxies[Math.floor(Math.random() * proxies.length)]);
		let token = "1--12-S_-2";
        new socketFinder(url, type, token, agent);
	};
};
function EZ_Score(a) {
    (20000 <= a) ? (a = 1000 * (a - 20000)) : ((10000 <= a) && (a = 100 * (a - 10000)));
    if(a > 10000) {
    return ~~a/1000 + 'K'
    } else {
    return a;
    }
};
client.login(process.env.TOKEN).then((token) => {
client.user.setPresence({
  game: { name: '.lb [args]' },
  status: 'online',
 });
});

					setInterval(() => {
						setTimeout(()=> {
					createBots("wss://frankfurt3.starve.io/server-eu-1", "eu1");
					createBots("wss://frankfurt3.starve.io/server-eu-2", "eu2");
					createBots("wss://frankfurt2.starve.io/server-eu-3", "eu3");
					createBots("wss://frankfurt3.starve.io/server-eu-4", "eu4");
					createBots("wss://toronto3.starve.io/server-na-1", "na1");
					createBots("wss://toronto3.starve.io/server-na-2", "na2");
					createBots("wss://toronto3.starve.io/server-na-3", "na3");
					console.log("1")
						}, 1000)
						setTimeout(() => {
					createBots("wss://toronto3.starve.io/server-na-4", "na4");
					createBots("wss://tokyo3.starve.io/server-as2", "tk1");
					createBots("wss://frankfurt2.starve.io/server-eu-forest-1", "legacyeu1");
					createBots("wss://toronto1.starve.io/server-na-forest-1", "legacyna1");
					createBots("wss://singapore1.starve.io/server-as-forest-1", "legacyas1");
					createBots("wss://frankfurt2.starve.io/server712", "teammode");
					createBots("wss://frankfurt2.starve.io/server-eu-vampire-1", "vampeu1");
					console.log("2")
						},11000)
					}, 20000)
function KEY_GEN(a, b, e, d, c, f) {
        a = (1013904223 + (1664525 * (a + 28824))) % 4294967296;
        b = (1013904223 + (1664525 * (13210 + b))) % 4294967296;
        e = (~(32165 & e) & 32165) | (~(32165 & e) & e);
        d = (((24 << ((d >> 24) & 255)) + (16 << ((d >> 8) & 255))) + (8 << ((d >> 16) & 255))) + (32 << ((d >> 32) & 255));
        c = (1 + (22695477 * (39199 + c))) % 4294967296;
        f ^= 33037;
        var h = (12345 + (1103515245 * (39051 + a))) % 2147483648,
            g = (44117 | b) & ~(b & 44117),
            k = (((24 << ((e >> 24) & 255)) + (8 << ((e >> 16) & 255))) + (16 << ((e >> 32) & 255))) + (32 << ((e >> 8) & 255)),
            l = Af1(h, g, k, h, g),  
            g = nc1(k, h, g, k, h, g),
            k = (((16 << ((k >> 8) & 255)) + (32 << ((k >> 16) & 255))) + (8 << ((k >> 32) & 255))) + (24 << ((k >> 24) & 255)),
            h = (((32 << ((h >> 32) & 255)) + (24 << ((h >> 24) & 255))) + (8 << ((h >> 8) & 255))) + (16 << ((h >> 16) & 255)),
            m = qd1(k, h, k, h, k, h),
            p = 64570 ^ k,
            n = (2531011 + (214013 * (h + 41768))) % 4294967296,
            q = (1013904223 + (1664525 * (k + 43923))) % 4294967296,
            r = (((16 << ((h >> 32) & 255)) + (8 << ((h >> 24) & 255))) + (32 << ((h >> 16) & 255))) + (24 << ((h >> 8) & 255)),
            t = (k | 21896) & ~(k & 21896),
            z = ((1103515245 * (p + 49468)) + 12345) % 2147483648,
            y = ((214013 * (n + 30513)) + 2531011) % 4294967296,
            A = ((1664525 * (5294 + z)) + 1013904223) % 4294967296,
            B = (y | 55665) & ~(55665 & y),
            C = (z + 54633) % 65404;
        var F = (2531011 + (214013 * (C + 16955))) % 4294967296,
            E = ((1103515245 * (9436 + A)) + 12345) % 2147483648,
            D = (14774 | B) & ~(14774 & B),
            G = (48802 | C) & ~(C & 48802),
            L = ~(A & 24998) & (A | 24998),
            K = (((8 << ((B >> 8) & 255)) + (16 << ((B >> 16) & 255))) + (32 << ((B >> 32) & 255))) + (24 << ((B >> 24) & 255));
        k = 8337 ^ ((m | 58283) & ~(58283 & m));
        l = (((16 << (((l ^ g) >> 32) & 255)) + (24 << (((l ^ g) >> 24) & 255))) + (32 << (((l ^ g) >> 8) & 255))) + (8 << (((l ^ g) >> 16) & 255));
        l = (((8 << (((l ^ k) >> 32) & 255)) + (16 << (((l ^ k) >> 8) & 255))) + (32 << (((l ^ k) >> 16) & 255))) + (24 << (((l ^ k) >> 24) & 255));
        a = Qd1(b, e, d, c);
        return ((1103515245 * (34159 + ((l ^ 2959) ^ a))) + 12345) % 2147483648;
    };
	function Af1(a, b, e, d, c) {
        a = ((1664525 * (9716 + a)) + 1013904223) % 4294967296;
        b = (~(b & 7703) & b) | (~(b & 7703) & 7703);
        e = (e | 31275) & ~(31275 & e);
        d = (~(25693 & d) & 25693) | (~(25693 & d) & d);
        var f = (((8 << ((c >> 8) & 255)) + (32 << ((c >> 24) & 255))) + (24 << ((c >> 16) & 255))) + (16 << ((c >> 32) & 255));
        c = Kb1(a, b, e, d, f, a);
        d = Ra1(b, e, d, f);
        Cf1(a, b, e);
        return ((((24 << (((c ^ d) >> 16) & 255)) + (8 << (((c ^ d) >> 8) & 255))) + (32 << (((c ^ d) >> 24) & 255))) + (16 << (((c ^ d) >> 32) & 255))) ^ 31710;
    };
	function nc1(a, b, e, d, c, f) {
        e ^= 8102;
        d = (((24 << ((d >> 16) & 255)) + (32 << ((d >> 32) & 255))) + (8 << ((d >> 24) & 255))) + (16 << ((d >> 8) & 255));
        c = (~(c & 29687) & 29687) | (~(29687 & c) & c);
        f = (1 + (22695477 * (62237 + f))) % 4294967296;
        a = sd1((a + 52483) % 65496, (((16 << ((b >> 16) & 255)) + (24 << ((b >> 8) & 255))) + (32 << ((b >> 24) & 255))) + (8 << ((b >> 32) & 255)));
        b = sd1(e, d);
        sd1(c, f);
        return 55575 ^ ((45290 + (a ^ b)) % 65334);
    };
	function qd1(a, b, e, d, c, f) {
        a = (((24 << ((a >> 24) & 255)) + (32 << ((a >> 16) & 255))) + (16 << ((a >> 8) & 255))) + (8 << ((a >> 32) & 255));
        b = (41551 | b) & ~(b & 41551);
        e = (((24 << ((e >> 24) & 255)) + (16 << ((e >> 32) & 255))) + (8 << ((e >> 16) & 255))) + (32 << ((e >> 8) & 255));
        d = ~(32641 & d) & (32641 | d);
        c = ((214013 * (c + 35582)) + 2531011) % 4294967296;
        f = ~(1090 & f) & (f | 1090);
        var g = nc1(a, b, e, d, c, f);
        od1(a, b, e, d, c);
        Ra1(f, a, b, e);
        a = (~(g & 8077) & 8077) | (~(8077 & g) & g);
        return ~(3708 & a) & (a | 3708);
    };
	function Qd1(a, b, e, d) {
        a = ~(33107 & a) & (33107 | a);
        b = (((24 << ((b >> 32) & 255)) + (32 << ((b >> 8) & 255))) + (8 << ((b >> 16) & 255))) + (16 << ((b >> 24) & 255));
        e = ~(e & 32053) & (32053 | e);
        d ^= 12240;
        var c = (((32 << ((a >> 32) & 255)) + (16 << ((a >> 16) & 255))) + (24 << ((a >> 24) & 255))) + (8 << ((a >> 8) & 255)),
            f = (1 + (22695477 * (50595 + b))) % 4294967296,
            h = (~(40066 & e) & e) | (~(e & 40066) & 40066),
            g = 18768 ^ d,
            k = rd1(c, f, h, g, c),
            l = (12345 + (1103515245 * (23101 + f))) % 2147483648,
            m = 58614 ^ h,
            p = ((214013 * (g + 45267)) + 2531011) % 4294967296,
            c = c ^ 40810,
            n = (((24 << ((f >> 24) & 255)) + (8 << ((f >> 32) & 255))) + (32 << ((f >> 8) & 255))) + (16 << ((f >> 16) & 255)),
            f = Rd1(l, m),
            l = yf1(p, c, n, l),
            m = (m + 34282) % 65336,
            p = (~(p & 45181) & 45181) | (~(45181 & p) & p),
            c = (((16 << ((c >> 8) & 255)) + (32 << ((c >> 24) & 255))) + (8 << ((c >> 32) & 255))) + (24 << ((c >> 16) & 255)),
            n = (~(n & 25475) & 25475) | (~(25475 & n) & n),
            q = (~(41406 & m) & m) | (~(m & 41406) & 41406),
            r = ((1103515245 * (p + 17922)) + 12345) % 2147483648;
        f = (((24 << (((f ^ l) >> 24) & 255)) + (32 << (((f ^ l) >> 16) & 255))) + (8 << (((f ^ l) >> 32) & 255))) + (16 << (((f ^ l) >> 8) & 255));
        f = (~(13644 & f) & f) | (~(f & 13644) & 13644);
        h = sd1(h, g);
        k = ((1664525 * ((((2531011 + (214013 * ((k ^ f) + 35287))) % 4294967296) ^ h) + 16767)) + 1013904223) % 4294967296;
        a = rd1(a, b, e, d, a);
        return (2531011 + (214013 * (44352 + (((~(64131 & k) & 64131) | (~(64131 & k) & k)) ^ a)))) % 4294967296;
    };
	function Ra1(a, b, e, d) {
        a ^= 11762;
        b = (~(b & 19425) & 19425) | (~(19425 & b) & b);
        return ((1664525 * (55182 + ((((1664525 * (17757 + (((((32 << (((a ^ b) >> 32) & 255)) + (8 << (((a ^ b) >> 8) & 255))) + (24 << (((a ^ b) >> 24) & 255))) + (16 << (((a ^ b) >> 16) & 255))) ^ ((((32 << ((e >> 16) & 255)) + (8 << ((e >> 32) & 255))) + (24 << ((e >> 24) & 255))) + (16 << ((e >> 8) & 255)))))) + 1013904223) % 4294967296) ^ ((~(259 & d) & 259) | (~(259 & d) & d))))) + 1013904223) % 4294967296;
    };
	function Cf1(a, b, e) {
        a ^= 23323;
        b = (2531011 + (214013 * (61713 + b))) % 4294967296;
        e = (e | 24198) & ~(e & 24198);
        var d = Qc1(a, b, e, a, b),
            c = Qc1(e, a, b, e, a);
        Qc1(b, e, a, b, e);
        return ((((16 << (((d ^ c) >> 32) & 255)) + (8 << (((d ^ c) >> 8) & 255))) + (24 << (((d ^ c) >> 24) & 255))) + (32 << (((d ^ c) >> 16) & 255))) ^ 31181;
    };
	function Kb1(a, b, e, d, c, f) {
        a ^= 23409;
        b ^= 26380;
        c = ((1103515245 * (c + 33017)) + 12345) % 2147483648;
        f ^= 42490;
        e = Ra1(a, b, e ^ 53590, 36633 ^ d);
        d = Ra1(c, f, a, b);
        return ((22695477 * (19056 + (e ^ d))) + 1) % 4294967296;
    };
	function sd1(a, b) {
        var e = (2531011 + (214013 * (a + 62874))) % 4294967296,
            d = (((24 << ((b >> 24) & 255)) + (16 << ((b >> 32) & 255))) + (8 << ((b >> 8) & 255))) + (32 << ((b >> 16) & 255)),
            c = Kb1(e, d, e, d, e, d),
            f = Kb1(e, d, e, d, e, d);
        Ra1(e, d, e, d);
        e = (((16 << (((c ^ f) >> 32) & 255)) + (8 << (((c ^ f) >> 24) & 255))) + (24 << (((c ^ f) >> 16) & 255))) + (32 << (((c ^ f) >> 8) & 255));
        return (~(e & 55949) & 55949) | (~(55949 & e) & e);
    };
	 function od1(a, b, e, d, c) {
        a = (((32 << ((a >> 24) & 255)) + (16 << ((a >> 8) & 255))) + (24 << ((a >> 16) & 255))) + (8 << ((a >> 32) & 255));
        b = (b + 39144) % 65406;
        e ^= 34575;
        d = (~(37841 & d) & d) | (~(d & 37841) & 37841);
        c = (25975 | c) & ~(25975 & c);
        var f = Ra1(a, b, e, d);
        pc1(c, a, b, e, d);
        Kb1(c, a, b, e, d, c);
        return 36297 ^ ((19326 | f) & ~(19326 & f));
    };
	function rd1(a, b, e, d, c) {
        a ^= 62008;
        b = (((24 << ((b >> 32) & 255)) + (8 << ((b >> 16) & 255))) + (32 << ((b >> 8) & 255))) + (16 << ((b >> 24) & 255));
        e = ((22695477 * (e + 46531)) + 1) % 4294967296;
        d = (~(d & 1884) & 1884) | (~(1884 & d) & d);
        var f = (~(c & 55588) & 55588) | (~(55588 & c) & c);
        c = Pd1(a, b, e, d, f);
        nc1(a, b, e, d, f, a);
        a = kd1(b, e, d, f, a);
        return ((1664525 * (((c ^ 57467) ^ a) + 3037)) + 1013904223) % 4294967296;
    };
	function kd1(a, b, e, d, c) {
        a = ((1103515245 * (a + 49173)) + 12345) % 2147483648;
        b = (b + 52922) % 65337;
        e ^= 25250;
        d = (~(d & 10903) & 10903) | (~(10903 & d) & d);
        c = (~(c & 33814) & 33814) | (~(33814 & c) & c);
        var f = od1(a, b, e, d, c),
            g = Rd1(a, b);
        od1(e, d, c, a, b);
        a = (1 + (22695477 * ((f ^ g) + 19675))) % 4294967296;
        return (~(7922 & a) & a) | (~(a & 7922) & 7922);
    };
	function Pd1(a, b, e, d, c) {
        a = ((2147483629 * (a + 14772)) + 2147483587) % 2147483647;
        b ^= 63080;
        e = ((22695477 * (e + 60304)) + 1) % 4294967296;
        d = (~(5467 & d) & 5467) | (~(5467 & d) & d);
        c = (c | 40165) & ~(40165 & c);
        var f = (57611 | a) & ~(a & 57611),
            h = ((1664525 * (b + 56889)) + 1013904223) % 4294967296,
            g = e ^ 62842,
            k = (~(d & 1179) & d) | (~(d & 1179) & 1179),
            l = Ra1(f, h, g, k),
            m = mc1(f, h, g, k);
        yf1(f, h, g, k);
        f = (((24 << (((l ^ m) >> 24) & 255)) + (8 << (((l ^ m) >> 16) & 255))) + (16 << (((l ^ m) >> 32) & 255))) + (32 << (((l ^ m) >> 8) & 255));
        f = ~(63304 & f) & (f | 63304);
        h = kd1(c, a, b, e, d);
        a = nc1(c, a, b, e, d, c);
        return ((1664525 * (28765 + (((((16 << (((f ^ h) >> 24) & 255)) + (8 << (((f ^ h) >> 16) & 255))) + (24 << (((f ^ h) >> 32) & 255))) + (32 << (((f ^ h) >> 8) & 255))) ^ a))) + 1013904223) % 4294967296;
    };
	function yf1(a, b, e, d) {
        a = (~(59259 & a) & a) | (~(a & 59259) & 59259);
        b = (~(b & 56097) & b) | (~(b & 56097) & 56097);
        e = ((1664525 * (43315 + e)) + 1013904223) % 4294967296;
        d = (((8 << ((d >> 24) & 255)) + (32 << ((d >> 32) & 255))) + (24 << ((d >> 8) & 255))) + (16 << ((d >> 16) & 255));
        var c = 10715 ^ a,
            f = (((24 << ((b >> 16) & 255)) + (16 << ((b >> 32) & 255))) + (32 << ((b >> 8) & 255))) + (8 << ((b >> 24) & 255)),
            h = (((8 << ((e >> 16) & 255)) + (32 << ((e >> 24) & 255))) + (16 << ((e >> 8) & 255))) + (24 << ((e >> 32) & 255)),
            g = d ^ 40782,
            k = a ^ 41301,
            l = ~(b & 12091) & (12091 | b),
            m = Od1(c, f, h, g, k, l);
        c = (m | 3006) & ~(m & 3006);
        c = ~(24460 & c) & (c | 24460);
        f = kd1(e, d, a, b, e);
        a = (1013904223 + (1664525 * ((c ^ f) + 26191))) % 4294967296;
        return (a | 38630) & ~(38630 & a);
    };
	function Rd1(a, b) {
        var e = 24508 ^ a,
            d = (((16 << ((b >> 16) & 255)) + (24 << ((b >> 8) & 255))) + (32 << ((b >> 32) & 255))) + (8 << ((b >> 24) & 255)),
            c = Qc1(e, d, e, d, e),
            f = Sd1(d, e, d, e, d);
        Af1(e, d, e, d, e);
        e = ((2147483629 * ((c ^ f) + 11269)) + 2147483587) % 2147483647;
        return (~(e & 40927) & 40927) | (~(40927 & e) & e);
    };
	function rd1(a, b, e, d, c) {
        a ^= 62008;
        b = (((24 << ((b >> 32) & 255)) + (8 << ((b >> 16) & 255))) + (32 << ((b >> 8) & 255))) + (16 << ((b >> 24) & 255));
        e = ((22695477 * (e + 46531)) + 1) % 4294967296;
        d = (~(d & 1884) & 1884) | (~(1884 & d) & d);
        var f = (~(c & 55588) & 55588) | (~(55588 & c) & c);
        c = Pd1(a, b, e, d, f);
        a = kd1(b, e, d, f, a);
        return ((1664525 * (((c ^ 57467) ^ a) + 3037)) + 1013904223) % 4294967296;
    };
	function Qc1(a, b, e, d, c) {
        a = (((24 << ((a >> 24) & 255)) + (32 << ((a >> 16) & 255))) + (16 << ((a >> 8) & 255))) + (8 << ((a >> 32) & 255));
        b = (12345 + (1103515245 * (b + 3024))) % 2147483648;
        e = (((8 << ((e >> 8) & 255)) + (32 << ((e >> 32) & 255))) + (24 << ((e >> 16) & 255))) + (16 << ((e >> 24) & 255));
        d = (1 + (22695477 * (d + 41324))) % 4294967296;
        c = (19607 | c) & ~(c & 19607);
        var f = pd1(a, b);
        a = (~(49323 & f) & 49323) | (~(49323 & f) & f);
        return ~(a & 46567) & (46567 | a);
    };
	function pc1(a, b, e, d, c) {
        a = (~(42203 & a) & a) | (~(a & 42203) & 42203);
        b ^= 50118;
        e ^= 41620;
        d = ((2147483629 * (d + 34240)) + 2147483587) % 2147483647;
        var f = (((32 << ((c >> 16) & 255)) + (16 << ((c >> 8) & 255))) + (8 << ((c >> 32) & 255))) + (24 << ((c >> 24) & 255));
        c = nc1(a, b, e, d, f, a);
        a = Ra1(e, d, f, a);
        return (2531011 + (214013 * ((((43477 | c) & ~(c & 43477)) ^ a) + 53616))) % 4294967296;
    };
	function mc1(a, b, e, d) {
        a = (2147483587 + (2147483629 * (37418 + a))) % 2147483647;
        b ^= 57623;
        e = (~(e & 40280) & e) | (~(e & 40280) & 40280);
        d = (~(d & 24601) & d) | (~(d & 24601) & 24601);
        var c = pd1(a, b);
        a = (~(43902 & c) & 43902) | (~(43902 & c) & c);
        return (8862 | a) & ~(8862 & a);
    };
	 function Od1(a, b, e, d, c, f) {
        a = ~(a & 36133) & (a | 36133);
        b = (13670 | b) & ~(b & 13670);
        e = (31390 | e) & ~(e & 31390);
        d ^= 64081;
        c ^= 7550;
        var h = (2147483587 + (2147483629 * (f + 63950))) % 2147483647;
        f = Sd1(a, b, e, d, c);
        e = mc1(h, a, b, e);
        a = jd1(d, c, h, a, b);
        return (12345 + (1103515245 * (36760 + ((((2147483629 * (62552 + (f ^ e))) + 2147483587) % 2147483647) ^ a)))) % 2147483648;
    };
	function jd1(a, b, e, d, c) {
        a = (2147483587 + (2147483629 * (a + 64762))) % 2147483647;
        b = ((214013 * (18197 + b)) + 2531011) % 4294967296;
        e = (2531011 + (214013 * (22845 + e))) % 4294967296;
        d = (((32 << ((d >> 16) & 255)) + (16 << ((d >> 8) & 255))) + (8 << ((d >> 32) & 255))) + (24 << ((d >> 24) & 255));
        c = (~(c & 11999) & c) | (~(c & 11999) & 11999);
        var f = Kb1(a, b, e, d, c, a);
        b = qd1(b, e, d, c, a, b);
        Ra1(e, d, c, a);
        return ((((8 << (((f ^ b) >> 24) & 255)) + (16 << (((f ^ b) >> 16) & 255))) + (24 << (((f ^ b) >> 8) & 255))) + (32 << (((f ^ b) >> 32) & 255))) ^ 35444;
    };
	function Sd1(a, b, e, d, c) {
        a = (((16 << ((a >> 32) & 255)) + (24 << ((a >> 24) & 255))) + (8 << ((a >> 8) & 255))) + (32 << ((a >> 16) & 255));
        b ^= 55978;
        e = ((1664525 * (e + 2934)) + 1013904223) % 4294967296;
        d = ~(d & 30642) & (d | 30642);
        var f = (((8 << ((c >> 8) & 255)) + (24 << ((c >> 32) & 255))) + (16 << ((c >> 24) & 255))) + (32 << ((c >> 16) & 255));
        c = pc1(a, b, e, d, f);
        f = jd1(a, b, e, d, f);
        a = (((16 << (((c ^ f) >> 32) & 255)) + (24 << (((c ^ f) >> 8) & 255))) + (8 << (((c ^ f) >> 24) & 255))) + (32 << (((c ^ f) >> 16) & 255));
        return ~(23686 & a) & (23686 | a);
    };
	function pd1(a, b) {
        var e = ((1664525 * (a + 44664)) + 1013904223) % 4294967296,
            d = b ^ 53080,
            c = Sd1(e, d, e, d, e),
            f = pc1(d, e, d, e, d),
            e = Ra1(e, d, e, d);
        return (1 + (22695477 * (((((c ^ f) + 17769) % 65357) ^ e) + 57525))) % 4294967296;
    };
	function pc1(a, b, e, d, c) {
        a = (~(42203 & a) & a) | (~(a & 42203) & 42203);
        b ^= 50118;
        e ^= 41620;
        d = ((2147483629 * (d + 34240)) + 2147483587) % 2147483647;
        var f = (((32 << ((c >> 16) & 255)) + (16 << ((c >> 8) & 255))) + (8 << ((c >> 32) & 255))) + (24 << ((c >> 24) & 255));
        c = nc1(a, b, e, d, f, a);
        a = Ra1(e, d, f, a);
        return (2531011 + (214013 * ((((43477 | c) & ~(c & 43477)) ^ a) + 53616))) % 4294967296;
    };
	function round_rect(c, g, f, d, e, m) {
    d < 2 * m && (m = d / 2);
    e < 2 * m && (m = e / 2);
    0 > m && (m = 0);
    c.beginPath();
    c.moveTo(g + m, f);
    c.arcTo(g + d, f, g + d, f + e, m);
    c.arcTo(g + d, f + e, g, f + e, m);
    c.arcTo(g, f + e, g, f, m);
    c.arcTo(g, f, g + d, f, m);
    c.closePath()
}
function fill_path(c, g, f, d) {
    g && (c.fillStyle = g, c.fill());
    f && (c.lineWidth = d, c.strokeStyle = f, c.stroke())
}
function create_text(c, g, f, d, e, m, n, p, r) {
    var t = createCanvas()
        , q = t.getContext("2d");
    m = m ? m * c : 0;
    var u = Math.floor(c * f);
    q.font = u + "px BalooPaaji";
    p *= c;
    var v = n ? 2 * p : 0;
    r = r ? Math.min(q.measureText(g)
            .width + 2 * c + v, r) : q.measureText(g)
        .width + 2 * c + v;
    u = (u + m) * c + v;
    t.width = r;
    t.height = u;
    n && (q.fillStyle = n, round_rect(q, 0, 0, r, u, 2 * p), q.fill(), q.translate(p, p));
    q.textBaseline = "middle";
    q.font = f + "px BalooPaaji";
    e && (q.beginPath(), q.fillStyle = e, q.fillText(g, 0, u / 2 + m - v / 2, r));
    q.beginPath();
    q.fillStyle = d;
    q.fillText(g
        , 0, (u - v) / 2, r);
    return t
}
function create_leaderboard(c) {
    var g = createCanvas(200, 400)
        , f = g.getContext("2d")
        , d = 200 * c
        , e = 400 * c
        , m = 10 * c;
    g.width = d;
    g.height = e;
    f.beginPath();
    round_rect(f, 0, -m, d + m, e - m, m);
    f.globalAlpha = .8;
    fill_path(f, "#3D8075");
    f.globalAlpha = 1;
    e = create_text(c, "Leaderboard", 25, "#FFF");
    f.drawImage(e, (d - e.width) / 2, 10 * c);
    return g
}
function CTI(c) {
    var g = new Image;
    g.src = c.toDataURL("image/png");
    g.width = c.width;
    g.height = c.height;
    return g
}
function draw_leaderboard(users) {
    var c = users
        , g = gameLeaderBoard;
        var f = g.ctx
            , e = !1;
        f.clearRect(0, 0, g.can.width, g.can.height);
        f.drawImage(g.img, 0, 0);
		var IMG_LABEL;
        for (var m = 0; m < c.length; m++) {
            var n = c[m];
			color = "#FFF";
            f.drawImage(create_text(scale, "" + (m + 1), 15 * scale, color), 20 * scale, (40 + 22 * m) * scale);
            IMG_LABEL = create_text(scale, n.name, 15 * scale, color, void 0, void 0, void 0, void 0, 110 * scale)
            f.drawImage(IMG_LABEL, 39 *
                scale, (40 + 22 * m) * scale);
            f.drawImage(create_text(scale, n.score, 15 * scale, color), 156 * scale, (40 + 22 * m) * scale)
        };
    ctx.drawImage(g.can, g.translate.x, g.translate.y)
}
function drawAuth() {
					ctx.fillStyle = 'gray';
					ctx.globalAlpha = .84;
					ctx.fillText("by xTime#0099 & Aloxx#8383", 20, 262);
					ctx.globalAlpha = 1;
}
function send(message, server, data) {
console.log(`Command: ${server.toLowerCase()} used by: `+ message.author.username);
	var up = server.toUpperCase(), down = server.toLowerCase();
					message.delete();
					message.reply('[Server]: Reciving data from database...', {code:'cs'}).then(msg => {
					setTimeout(() => {
					var embed = new fuck.MessageEmbed()
					.setColor("#000000")
					.setDescription("SERVER: " + up +", PLAYER COUNT: " + data)
					.attachFiles('./images/' + up +'.png')
					.setImage('attachment://'+ up +'.png')
					.setFooter('Request by: '+ message.author.username + '#' + message.author.discriminator, message.author.avatarURL())
					msg.reply(embed);
					if(data > 0) { 
					console.log('successfully!')
					msg.edit('[Server]: Successfully recived data!',{code:'cs'});
					} else {
					console.log('unsuccessfully!')
					msg.edit('[Error], Data is empty! Try again!', {code: 'js'});
					}
					message.reply("Please share this server with your friends <3\n New tier for this bot coming soon\n Example: 20 invites => All Leader Board of All Server! No colldown\n \n Here is the link: <discord.gg/pSauEbtMTe>").then(msg => {setTimeout(() => {msg.delete()},6000)})
					}, 500)
					})
}
