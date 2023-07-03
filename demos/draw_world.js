var mx = 0
var my = 0
var click = 0
var left = 0
var right = 0
var player = 0
var playerBody;
var colors = ['#d8bfaa','#AC8F79','#62a87c','#313b72','#edf67d','#e9d3d0','#9A6D38']
var p2Unlocked = 0
var cpx = [550,50,-1945,-3142,-3640,685,1350,8500]//450
var cpy = [-850,-1250,-2340,-2500,-3450,-1400,-1350,-32000]//-850
var special=[1,2,4,5,6,7]
var cp = []
var cpr = 30
var spawnX = -700
var spawnY = 190
var zoomedOut = 0
//spawnX = 11650
//spawnY = -1850
var timer = 0
function checkpoints(){
	if(cp.length > 0){
		spawnX = cpx[Math.max(...cp)]
		spawnY = cpy[Math.max(...cp)]
	}
	for(var i = 0; i < cpx.length; i++){
		ctx.strokeStyle = '#808080'
		ctx.fillStyle = '#efea5a'
		ctx.globalAlpha = 1
		if(!cp.includes(i)&&!special.includes(i)) ctx.globalAlpha = 0.3
		if(special.includes(i)) ctx.fillStyle = '#F29E4C'
		if(i == 6) ctx.fillStyle = '#9bf3f0'
			//ctx.fillStyle = '#FFFFFF'
		ctx.lineWidth = 3
		var s = 1+Math.sin(timer)/300
		var c = 1+Math.cos(timer)/300
if(special.includes(i) || i == 0){
		ctx.beginPath()
		ctx.moveTo((cpx[i]-cpr/2)*s,cpy[i]*c)
		ctx.lineTo(cpx[i]*s,(cpy[i]-cpr/2)*c)
		ctx.lineTo((cpx[i]+cpr/2)*s,(cpy[i])*c)
		ctx.lineTo(cpx[i]*s,(cpy[i]+cpr/2)*c)
		ctx.closePath()
		ctx.fill()
		ctx.stroke()
}
		var x1 = world.m_bodyList.m_position.x - Math.cos(world.m_bodyList.m_rotation)*55
		var x2 = world.m_bodyList.m_position.x + Math.cos(world.m_bodyList.m_rotation)*55
		var y1 = world.m_bodyList.m_position.y - Math.sin(world.m_bodyList.m_rotation)*55
		var y2 = world.m_bodyList.m_position.y + Math.sin(world.m_bodyList.m_rotation)*55
		if(lineCircle(x1,y1,x2,y2,cpx[i],cpy[i],cpr/2)){
			//playerBody.m_linearVelocity.x = 0
				//playerBody.m_linearVelocity.y = 0

			if(i==1){
				world.m_gravity = new b2Vec2(-300, 0);
			}
			else if(i==2){
				world.m_gravity = new b2Vec2(0, -300);
			}
			else if(i==4){
				world.m_gravity = new b2Vec2(300, 0);
			}
			else if(i==5){
				world.m_gravity = new b2Vec2(0, 300);
			}
			else if(i==7){
				playerBody.color = 7
				for (var b = world.m_bodyList; b; b = b.m_next) {
		for (var s = b.GetShapeList(); s != null; s = s.GetNext()) {
			s.density = 5
		}
	}
			}
			else if(i==6){
				for (var b = world.m_bodyList; b; b = b.m_next) {
					if(b.sp == 1){
						b.m_linearVelocity.y = -170
					}
	}
			}

			else if(!cp.includes(i)){
				if(i == 0) cp.push(i)

			} 
		}
	}
}

function restart(){
	p2Unlocked = 0
	setupWorld(0)
		if(Math.max(...cp)==0)world.m_gravity = new b2Vec2(0, 300)
		if(Math.max(...cp)==3){
			world.m_gravity = new b2Vec2(0, -300)
				world.m_bodyList.m_next.m_position.x = -2000
				world.m_bodyList.m_next.m_position.y = -2600
			}
}
setTimeout(function(){
document.addEventListener('keydown',function(e){
	//console.log(e.keyCode)
	var b = world.m_bodyList
	if(e.keyCode == 82){
		restart()
		}

		if(e.keyCode == 65) left = 1
	if(e.keyCode == 68) right = 1
	if(e.keyCode == 32 && p2Unlocked==1) player = 1 - player//world.m_gravity.y *= -1

	if(e.keyCode == 37){
		for (var b = world.m_bodyList; b; b = b.m_next) {

	}
	}
})
document.addEventListener('keyup',function(e){
var b = world.m_bodyList
		if(e.keyCode == 65){
			playerBody.m_angularVelocity = 0
			left = 0

		} 
	if(e.keyCode == 68){
		playerBody.m_angularVelocity = 0
		right = 0
	} 
	
	

	
})

document.addEventListener('mousedown',function(e){

		if(e.x < canvas.width/2) left = 1
	else right = 1
})
document.addEventListener('mouseup',function(e){
	left = 0
right = 0
		if(e.x < canvas.width/2){
			playerBody.m_angularVelocity = 0
			left = 0

		} 
	else{
		playerBody.m_angularVelocity = 0
		right = 0
	} 
})

document.addEventListener('touchstart',function(e){
	var t = e.changedTouches
	if(t[0].pageX < canvas.width/2)left = 1
	else right = 1
	if(t[0].pageX>10&&t[0].pageX<70&&t[0].pageY>canvas.height-70&&t[0].pageY<canvas.height-10) player = 1 - player
})
document.addEventListener('touchend',function(e){
	var t = e.changedTouches
	left = 0
right = 0
		if(t[0].pageX < canvas.width/2){
			playerBody.m_angularVelocity = 0
			left = 0

		} 
	else{
		playerBody.m_angularVelocity = 0
		right = 0
	} 
})
	document.addEventListener('mousemove',function(e){
		/*var dir = 90//dirTo(-world.m_bodyList.m_position.x,-world.m_bodyList.m_position.y,e.x,e.y)* Math.PI/180
	world.m_bodyList.m_rotation += (dir-world.m_bodyList.m_rotation)/100*/

	
})
},100)



function drawWorld(world, context) {

	ctx.save()
	timer += Math.random()/10
	playerBody = world.m_bodyList
	for(var i = 0 ;i < player; i++) playerBody = playerBody.m_next
	if(left == 1) playerBody.m_angularVelocity = -4
	if(right == 1) playerBody.m_angularVelocity = 4
	
	ctx.fillStyle = 'rgb(' + (191-0) + ',' + (209-0) + ',' + (229-0) + ')'
	ctx.fillRect(0,0,document.getElementById('canvas').width,document.getElementById('canvas').height)
	ctx.fillStyle = '#000000'
	//ctx.fillText(Math.round(world.m_bodyList.m_position.x) + ' ' + Math.round(world.m_bodyList.m_position.y),100,100)

	
	var sc = 0.06
	
	if(!zoomedOut) ctx.translate((-playerBody.GetCenterPosition().x+document.getElementById('canvas').width/2), (-playerBody.GetCenterPosition().y+document.getElementById('canvas').height/2))
for (var b = world.m_bodyList; b; b = b.m_next) {
			if(b.spin==1){
				b.m_linearVelocity.x *= 0.99
				b.m_linearVelocity.y *= 0.99
			}
					if(b.sp == 1){
						b.m_linearVelocity.x = 0
						if(world.m_gravity.y <= 0) b.m_linearVelocity.y = 250
						b.m_position.x = 950
						b.m_rotation = 0
						b.m_angularVelocity = 0
					}

	}
	checkpoints()
	ctx.globalAlpha = 1
	if(zoomedOut){
		ctx.translate(500,600)
	ctx.scale(sc,sc)
	}
	
	ctx.fillStyle = '#143642'
	ctx.strokeStyle = '#143642'
	ctx.font = '50px arial'
	ctx.beginPath()
	ctx.moveTo(-525,-1300)
	ctx.lineTo(-525,-1400)
	ctx.lineTo(-570,-1400)
	ctx.stroke()
	ctx.beginPath()
	ctx.moveTo(-560,-1410)
	ctx.lineTo(-560,-1390)
	ctx.lineTo(-570,-1400)
	ctx.closePath()
	ctx.fill()


	ctx.beginPath()
	ctx.moveTo(-3850,-3450)
	ctx.lineTo(-3850,-3250)
	ctx.stroke()
	ctx.beginPath()
	ctx.moveTo(-3840,-3250)
	ctx.lineTo(-3860,-3250)
	ctx.lineTo(-3850,-3240)
	ctx.closePath()
	ctx.fill()
	for (var j = world.m_jointList; j; j = j.m_next) {
		drawJoint(j, context);
	}
	for (var b = world.m_bodyList; b; b = b.m_next) {
		for (var s = b.GetShapeList(); s != null; s = s.GetNext()) {
			drawShape(s, context,b.color);
		}
	}
	ctx.fillStyle = '#143642'
	ctx.strokeStyle = '#143642'
	ctx.font = '50px arial'
	/*ctx.beginPath()
	ctx.moveTo(-900,100)
	ctx.lineTo(-890,110)
	ctx.moveTo(-900,100)
	ctx.lineTo(-890,90)
	ctx.moveTo(-900,100)
	ctx.lineTo(-860,100)
	ctx.stroke()
	ctx.fillText('A      W', -850,120)
	ctx.beginPath()
	ctx.moveTo(-650,100)
	ctx.lineTo(-890,110)
	ctx.moveTo(-900,100)
	ctx.lineTo(-890,90)
	ctx.moveTo(-900,100)
	ctx.lineTo(-860,100)
	ctx.stroke()*/
	ctx.fillText('Space!', 250,-1000)
	ctx.fillText('EXIT >>>>>>>>>>', 7000,-200)
	//ctx.fillText("Oh no.", 12000,-200)
	ctx.fillText("The edge.", 14800,-1000)
	

		ctx.restore()
		if(/*playerBody.m_position.x < 611 && playerBody.m_position.y < -720*/ cp.includes(0)) p2Unlocked = 1
		/*if(p2Unlocked){
			ctx.fillStyle = colors[1]
		ctx.strokeStyle = '#000000'
		ctx.lineWidth = 3
		ctx.fillRect(10,canvas.height-70,60,60)
		ctx.strokeRect(10,canvas.height-70,60,60)
		}
		*/


}
function drawJoint(joint, context) {
	ctx.lineWidth = 1
	var b1 = joint.m_body1;
	var b2 = joint.m_body2;
	var x1 = b1.m_position;
	var x2 = b2.m_position;
	var p1 = joint.GetAnchor1();
	var p2 = joint.GetAnchor2();
	context.strokeStyle = '#000000';
	context.beginPath();
	switch (joint.m_type) {
	case b2Joint.e_distanceJoint:
		context.moveTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
		break;

	case b2Joint.e_pulleyJoint:
		// TODO
		break;

	default:
		if (b1 == world.m_groundBody) {
			context.moveTo(p1.x, p1.y);
			context.lineTo(x2.x, x2.y);
		}
		else if (b2 == world.m_groundBody) {
			context.moveTo(p1.x, p1.y);
			context.lineTo(x1.x, x1.y);
		}
		else {
			context.moveTo(x1.x, x1.y);
			context.lineTo(p1.x, p1.y);
			context.lineTo(x2.x, x2.y);
			context.lineTo(p2.x, p2.y);
		}
		break;
	}
	context.stroke();
}
function drawShape(shape, context,col,str) {
	//world.m_bodyList.position.Set(200,200)
	//console.log(world.m_bodyList)
	context.strokeStyle = '#808080';
	ctx.lineWidth = 3
	context.fillStyle = colors[col-1]
	context.beginPath();
	switch (shape.m_type) {
	case b2Shape.e_circleShape:
		{
			var circle = shape;
			var pos = circle.m_position;
			var r = circle.m_radius;
			var segments = 16.0;
			var theta = 0.0;
			var dtheta = 2.0 * Math.PI / segments;
			// draw circle
			context.moveTo(pos.x + r, pos.y);
			for (var i = 0; i < segments; i++) {
				var d = new b2Vec2(r * Math.cos(theta), r * Math.sin(theta));
				var v = b2Math.AddVV(pos, d);
				context.lineTo(v.x, v.y);
				theta += dtheta;
			}
			context.lineTo(pos.x + r, pos.y);
	
			// draw radius
			context.moveTo(pos.x, pos.y);
			var ax = circle.m_R.col1;
			var pos2 = new b2Vec2(pos.x + r * ax.x, pos.y + r * ax.y);
			//context.lineTo(pos2.x, pos2.y);
		}
		break;
	case b2Shape.e_polyShape:
		{
			var poly = shape;
			var tV = b2Math.AddVV(poly.m_position, b2Math.b2MulMV(poly.m_R, poly.m_vertices[0]));
			context.moveTo(tV.x, tV.y);
			for (var i = 0; i < poly.m_vertexCount; i++) {
				var v = b2Math.AddVV(poly.m_position, b2Math.b2MulMV(poly.m_R, poly.m_vertices[i]));
				context.lineTo(v.x, v.y);
			}
			context.lineTo(tV.x, tV.y);
		}
		break;
	}
	context.fill();
	context.stroke();
	
}

function dist(x1,y1,x2,y2){
	return Math.sqrt((x1-x2)**2+(y1-y2)**2)
}

function lineCircle(x1, y1, x2,y2, cx, cy, r) {

  var inside1 = pointCircle(x1,y1, cx,cy,r);
  var  inside2 = pointCircle(x2,y2, cx,cy,r);
  if (inside1 || inside2) return true;

  var distX = x1 - x2;
  var distY = y1 - y2;
  var len = Math.sqrt( (distX*distX) + (distY*distY) );


  var dot = ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / (len*len);


  var closestX = x1 + (dot * (x2-x1));
  var closestY = y1 + (dot * (y2-y1));

  var onSegment = linePoint(x1,y1,x2,y2, closestX,closestY);
  if (!onSegment) return false;



  distX = closestX - cx;
  distY = closestY - cy;
  var distance = Math.sqrt( (distX*distX) + (distY*distY) );

  if (distance <= r) {
    return true;
  }
  return false;
}


function pointCircle(px, py,cx,cy, r) {

  var distX = px - cx;
  var distY = py - cy;
  var distance = Math.sqrt( (distX*distX) + (distY*distY) );
  if (distance <= r) {
    return true;
  }
  return false;
}



function linePoint( x1,  y1,  x2,  y2, px, py) {


  var d1 = dist(px,py, x1,y1);
  var d2 = dist(px,py, x2,y2);

  // get the length of the line
  var lineLen = dist(x1,y1, x2,y2);

  // since floats are so minutely accurate, add
  // a little buffer zone that will give collision
  var buffer = 0.1;    // higher # = less accurate

  // if the two distances are equal to the line's
  // length, the point is on the line!
  // note we use the buffer here to give a range,
  // rather than one #
  if (d1+d2 >= lineLen-buffer && d1+d2 <= lineLen+buffer) {
    return true;
  }
  return false;
}

function circleCircle(x1,y1,r1,x2,y2,r2){
	if(dist(x1,y1,x2,y2)<=r1+r2)return true
	return false
}