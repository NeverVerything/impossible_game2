demos.top = {};
var px = 100
document.getElementById('canvas').width = window.innerWidth
document.getElementById('canvas').height = window.innerHeight
demos.top.createBall = function(world, x, y, rad, fixed) {
	var ballSd = new b2CircleDef();
	if (!fixed) ballSd.density = 1.0;
	ballSd.radius = rad || 10;
	ballSd.restitution = 0.2;
	var ballBd = new b2BodyDef();
	ballBd.AddShape(ballSd);
	ballBd.position.Set(x,y);
	return world.CreateBody(ballBd);
};
demos.top.createPoly = function(world, x, y, points, fixed) {
	var polySd = new b2PolyDef();
	if (!fixed) polySd.density = 1.0;
	polySd.vertexCount = points.length;
	for (var i = 0; i < points.length; i++) {
		polySd.vertices[i].Set(points[i][0], points[i][1]);
	}
	var polyBd = new b2BodyDef();
	polyBd.AddShape(polySd);
	polyBd.position.Set(x,y);
	return world.CreateBody(polyBd)
};
var jointDef = 0
var p3 = 0
var p4 = 0
function temp(o,o2,cube){
	var p2 = createBox(world, 120+o, 300+o2, 200, 100, true,1);
	p2.color = 1
	p3 = createBox(world, 1600+o, 400+o2, 300, 20, true,1);
	p3.color = 1
	
		p4 = createBox(world, 2500+o, 0+o2, 600, 20, false,1000);
	p4.color = 1
	var p5 = createBox(world, 2900+o, 0+o2, 170, 10, true,1000);
	p5.color = 1
	for(var i = 0; i < 10; i++){
		var p6 = createBox(world, 3100+i*50+o, -20-i*30+o2, 10, 10, true,1000);
	p6.color = 1
	}
	var p6 = createBox(world, 3200+i*50+o, -20-i*30+o2, 120, 10, true,1000);
	p6.color = 1
	for(var i = 0; i < 10; i++){
		var p6 = createBox(world, 3700-i*50+o, -380-i*30+o2, 10, 10, true,1000);
	p6.color = 1
	}



	var box1 = createBox(world, -700+o, 250+o2, 40,40, false,4);
	box1.color = 3
	/*var slope = demos.top.createPoly(world, 1300, 400, [[-500,0],[0,-200],[0,0]], true,1);
	slope.color = 4*/
	for(var i = 0; i < 3;i++){
		var b1 = createBox(world,1000+o, 300-i*100+o2,80,25,false,10)
	b1.color = 5
	}
	
	for(var i = 1; i < 8;i++){
		var p = createBox(world,1590+i*40+o, 375-i*50+o2,250+i*10,25,true,10)
	p.color = 1
	}

	var p7 = createBox(world, 2700+o, -665+o2, 500, 10, true,1000);
	p7.color = 1
	jointDef.body1 = p4
	jointDef.body2 = p3
	jointDef.anchorPoint = new b2Vec2(p4.GetCenterPosition().x-100, p4.GetCenterPosition().y-500);
	world.CreateJoint(jointDef);
}

demos.top.initWorld = function(world) {

	jointDef = new b2RevoluteJointDef();
	var p1 = createBox(world, 150, 400, 1000, 20, true,1);
	p1.color = 1
	temp(0,0,0)

	for(var i2 = 0; i2 < 10; i2++){

		var moving2 = createBox(world, 2100-150*i2, -665, 50, 10, false,40);
	moving2.color = 1
	var hold2 = createBall(world, 2100-150*i2, -865, 5, 0);
	hold2.color = 2
	moving2.spin = 1

		jointDef.body1 =hold2
	jointDef.body2 = moving2
	jointDef.anchorPoint = hold2.GetCenterPosition()
	world.CreateJoint(jointDef)
}

	var p = createBox(world, 600, -700, 70, 20, true);
	p.color = 1
	var p = createBox(world, 300, -750, 230, 20, true);
	p.color = 1
	var p = createBox(world, 640, -820, 50, 5, true);
	p.color = 1


////////////////////////aaa
	var p1 = createBox(world, -400, -750, 150, 20, true,1);
	p1.color = 1
	var p = createBox(world, -560, -1045, 10, 315, true);
	p.color = 1
	var box = createBox(world, -450, -850, 20,20, false,500);
	//pl1.m_position.x = 500
	//pl1.m_position.y  = -800
	box.color = 3
	var pl = createBox(world, -450, -700, 150,10, false,100);
	//pl1.m_position.x = 500
	//pl1.m_position.y  = -800
	pl.color = 2
	pl.spin = 1
	jointDef.body1 = box
	jointDef.body2 = pl
	jointDef.anchorPoint = box.GetCenterPosition()
	world.CreateJoint(jointDef);

	var p = createBox(world, -800, -450, 300, 20, true);
	p.color = 1
	for(var i = 0; i < 10; i++){
		var b = createBox(world, -750, -500-i*90, 35,5, true);
	}
	
	b.color = 5


var p = createBox(world, 330, -1440, 160, 500, true);
	p.color = 1
	p.remove = 1///////
	var p = createBox(world, -300, -1350, 200, 10, true);
	p.color = 1
	var p = createBox(world, 50, -1200, 40, 10, true);
	p.color = 1
	var p = createBox(world, 260, -1140, 90, 10, true);
	p.color = 1
	
	var p = createBox(world, 540, -1000, 140, 10, true);
	p.color = 1

	for(var i = 0;i < 6; i++){
			var p = createBox(world, 750+i*70, -1020-i*54, 70+i, 27, true);
	p.color = 1
		}
		var p = createBox(world, 1580, -1239, 375, 27, true);
	p.color = 1
	for(var i = 1;i < 4; i++){
			var p = createBox(world, 750+(i-1.5)*130, -1320-(i-2)*54, 60+i, 27, true);
	p.color = 1
		}


		var m4 = createBox(world, 2155, -1392, 200, 20, true,10);
	m4.color = 1

var m5 = createBox(world, 3155, -1392, 20, 20, true,10);
	m5.color = 1
	/*for(var i = 0; i < 10; i++){
		for(var k = 0; k < 3; k++){
			var b = createBox(world, 800+i*80, -1030-k*80, 40, 40, false, 100);
	b.color = 5
		}
	}*/



	var p = createBox(world, -2000, -1500, 100, 450, true,10);
	p.color = 6
	var p = createBox(world, -2040, -2200, 100, 110, true,10);
	p.color = 6
	var p = createBox(world, -1800, -2800, 400, 50, true,10);
	p.color = 6
	var p = createBox(world, -2800, -2600, 400, 70, true,10);
	p.color = 6

	for(var i = 0; i < 3;i++){
		var p = createBox(world, -3100-70-((i*(i+1)/(i+9)*i*i*111))%400-200, -2800-200*i-i*((i*(i+1)/(i+9)*i*i*116))%90, 70, 70, true,10);
	p.color = 6
	}
	var p = createBox(world, -3100-70-((i*(i+1)/(i+9)*i*i*111))%400-150, -2800-200*i-i*((i*(i+1)/(i+9)*i*i*116))%90-100, 70, 170, true,10);
	p.color = 6

var p = createBox(world, 950, -2800, 70, 800, false,99999);
	p.color = 1
	p.sp = 1
var p = createBox(world, 1350, -1300, 5, 20, true);
	p.color = 1
	var pr = m4
	for(var i = 0; i < 53; i++){
		var b = createBall(world, 2350+i*15, -1300, 10,60);
	b.color = 2
	b.spin = 1
	jointDef.body1 = b
	jointDef.body2 = pr
	jointDef.anchorPoint = new b2Vec2(pr.m_position.x, pr.m_position.y);
	world.CreateJoint(jointDef);
	pr = b
	}
jointDef.body1 = b
	jointDef.body2 = m5
	jointDef.anchorPoint = new b2Vec2(b.m_position.x, b.m_position.y);
	world.CreateJoint(jointDef);
	pr = b
	for(var i = 0; i < 50; i++){
		var m = createBox(world, 3155+i*50, -1392+i*20, 20, 20, true,10);
	m.color = 1
	}
	var w = 3850
	var m = createBox(world, 5155+i*50+w-2000, -1392+i*30, w, 20, true,10);
	m.color = 1
	temp(12250,-292,1)
	for(var i = 0; i < 10; i++){
		//temp(13250,-692,0)
	}
////////////////
	var pl2 = createBox(world, -700, 190, 5,100, false,50);
	pl2.m_position.x = 300
	pl2.m_position.y  = -800
	//pl2.m_position.x = 2050
	//pl2.m_position.y  = -1650
	pl2.color = 2
	pl2.m_rotation = Math.PI/2
	var pl1 = createBox(world, spawnX, spawnY, 55,5, false,100);
	//pl1.m_position.x = 1850
	//pl1.m_position.y = -400
	pl1.color = 2
	pl1.m_rotation = Math.PI/2
	



};
demos.InitWorlds.push(demos.top.initWorld);


