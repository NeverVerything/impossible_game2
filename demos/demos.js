var initId = 0;
var world = createWorld();
var ctx;
var canvasWidth;
var canvasHeight;
var canvasTop;
var canvasLeft;

function restart(){
	setupWorld(0)
	p2Unlocked = 0
		if(Math.max(...cp)==0)world.m_gravity = new b2Vec2(0, 300)
		if(Math.max(...cp)==3){
			world.m_gravity = new b2Vec2(0, -300)
				world.m_bodyList.m_next.m_position.x = -2000
				world.m_bodyList.m_next.m_position.y = -2600
			}
}

function setupWorld(did) {
	if (!did) did = 0;
	world = createWorld();
	initId += did;
	initId %= demos.InitWorlds.length;
	if (initId < 0) initId = demos.InitWorlds.length + initId;
	demos.InitWorlds[initId](world);
	world.m_bodyList.m_shapeList.m_friction = 0.9
}

setInterval(function(){
	var a = world.m_bodyList
	var b = a.m_next
	if(a.m_position.y > 2000 || b.m_position.y > 2000 || a.m_position.y < -5000 || b.m_position.y < -5000){
		restart()
	}
},100)
function setupNextWorld() { setupWorld(1); }
function setupPrevWorld() { setupWorld(-1); }
function step(cnt) {
	var stepping = false;
	var timeStep = 1.0/60;
	var iteration = 1;
	world.Step(timeStep, iteration);
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	drawWorld(world, ctx);
	//setTimeout('step(' + (cnt || 0) + ')', 10);
}
Event.observe(window, 'load', function() {
	setupWorld();
	ctx = $('canvas').getContext('2d');
	var canvasElm = $('canvas');
	canvasWidth = parseInt(canvasElm.width);
	canvasHeight = parseInt(canvasElm.height);
	canvasTop = parseInt(canvasElm.style.top);
	canvasLeft = parseInt(canvasElm.style.left);





	

	/*Event.observe('canvas', 'contextmenu', function(e) {
		//if (e.preventDefault) e.preventDefault();
		setupPrevWorld();
		return false;
	});*/
	setInterval('step(' + 0 + ')', 10);
});
