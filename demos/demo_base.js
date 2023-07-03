function createWorld() {
	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(-100000, -100000);
	worldAABB.maxVertex.Set(100000, 100000);
	var gravity = new b2Vec2(0, 300);
	var doSleep = false;
	var world = new b2World(worldAABB, gravity, doSleep);
	//createGround(world);
	//createBox(world, 30, 125, 10, 250);
	//createBox(world, 500, 125, 10, 250);
	return world;
}

function createGround(world) {
	var groundSd = new b2BoxDef();
	groundSd.extents.Set(10, 50);
	groundSd.restitution = 0.2;
	var groundBd = new b2BodyDef();
	groundBd.AddShape(groundSd);
	groundBd.position.Set(500, 340);
	return world.CreateBody(groundBd)
}

function createBall(world, x, y,r=5,d=1,color) {
	var ballSd = new b2CircleDef();
	ballSd.density = d;
	ballSd.radius = r;
	ballSd.restitution = 0;
	ballSd.friction = 0.9;
	var ballBd = new b2BodyDef();
	ballBd.AddShape(ballSd);
	ballBd.position.Set(x,y);
	ballBd.color = color
	return world.CreateBody(ballBd);
}

function createBox(world, x, y, width, height, fixed,d=1,color) {
	if (typeof(fixed) == 'undefined') fixed = true;
	var boxSd = new b2BoxDef();
	if (!fixed) boxSd.density = d;
	else boxSd.density = 0
	boxSd.extents.Set(width, height);
	var boxBd = new b2BodyDef();
	boxBd.AddShape(boxSd);
	boxBd.position.Set(x,y);
	return world.CreateBody(boxBd)
}

var demos = {};
demos.InitWorlds = [];
