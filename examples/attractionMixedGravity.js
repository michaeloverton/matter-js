// install plugin
Matter.use(
    'matter-wrap',
    'matter-attractors' // PLUGIN_NAME
);

var Example = Example || {};

Example.attractionMixedGravity = function() {

    var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
    world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: Math.min(document.documentElement.clientWidth, 1024),
            height: Math.min(document.documentElement.clientHeight, 1024)
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    world.bodies = [];
    world.gravity.scale = 0;

    engine.timing.timeScale = 1.5;

    // make the corral
    World.add(world, [
        Bodies.rectangle(0, 0, 2 * render.options.width, 5, { isStatic: true, visible: true }),
        Bodies.rectangle(0, render.options.height, 5, 2 * render.options.height, { isStatic: true, visible: true}),
        Bodies.rectangle(render.options.width, 0, 5, 2 * render.options.height, { isStatic: true, visible: true }),
        Bodies.rectangle(0, render.options.height, 2 * render.options.width, 5, { isStatic: true, visible: true})
    ]);

    for (var i = 0; i < 100; i += 1) {
        var radius = Common.random(10, 30);

        MatterAttractors.Attractors.gravityConstant = 0.01;
        MatterAttractors.Attractors.antiGravityConstant = -0.01;
        
        var gravType = MatterAttractors.Attractors.gravity;
        if(i%2 == 0) {
            console.log("ANTI GRAV: " + i);
            gravType = MatterAttractors.Attractors.antiGravity;
        }

        var body = Bodies.circle(
            Common.random(10, render.options.width), 
            Common.random(10, render.options.height),
            radius,
            {
                mass: radius/2,
                frictionAir: 0,
                plugin: {
                    attractors: [
                        gravType
                    ]
                }
            }
        );

        var speed = 0;

        Body.setVelocity(body, { 
            x: Common.random(-speed, speed), 
            y: Common.random(-speed, speed)
        });

        World.add(world, body);
    }

    // add mouse control
    var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};