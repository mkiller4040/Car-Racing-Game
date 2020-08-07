class Form
{
  constructor()
  {

  }
  
  display()
  {
    var title = createElement('h2');
    title.html("MultiPlayer Car Racing Game");
    title.position(130,0);

    var input = createInput("Enter Name Here");

    var button = createButton('Play');

    var greeting = createElement('h3');

    input.position(130,160);
    button.position(250,200);

    button.mousePressed(function()
    {
      input.hide();
      button.hide();

      var name = input.value();

      playerCount = playerCount + 1;

      player.update(name);
      player.updateCount(playerCount);

      greeting.html("Welcome to the World Grand Prix " + name);
      greeting.position(130,160);
    })
  }
}