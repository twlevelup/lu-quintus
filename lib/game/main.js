;(function() {
  var Q = Quintus()
    .include('Sprites, Scenes, Input, 2D')
    .setup({ width: 640, height: 480 })
    .controls()

  Q.Sprite.extend('Player', {
    init: function(p) {
      this._super(p, {
        w: 22,
        h: 22
      })

      this.add('stepControls')
    },

    draw: function(ctx) {
      ctx.strokeStyle = '#FF0000'
      ctx.strokeRect(-this.p.cx,-this.p.cy,this.p.w,this.p.h)
    }
  })

  Q.scene('start', function(stage) {
    var player = new Q.Player({ x: 100, y: 100 })

    stage.insert(player)
  })

  Q.stageScene('start')
})()