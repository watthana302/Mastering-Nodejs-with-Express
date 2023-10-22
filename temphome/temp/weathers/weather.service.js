const Product = require('./weather.model');

async function getAllWeathers (req, res){
    const products = await Product.findAll();
  res.send(products);
}

async function getAllWeathersname (req, res){
    const product = await Product.findOne({
        where: {
          name: req.params.name
        }
      });
      res.json(product);
}

async function getAllWeatherbyId (req, res){
    const { name, country, temp, weather, humidity, pressure, speed } = req.body;
  const product = await Product.create({
    name,
    country,
    temp,
    weather,
    humidity,
    pressure,
    speed
  });
  res.json(product);
}

async function putAllWeatherbyId (req, res){
    const { name, country, temp, weather, humidity, pressure, speed } = req.body;
  const product = await Product.findOne({
    where: {
      id: req.params.id
    }
  });

  product.name = name;
  product.country = country;
  product.temp = temp;
  product.weather = weather;
  product.humidity = humidity;
  product.pressure = pressure;
  product.speed = speed;

  await product.save();

  res.json(product);
}

async function deleteAllWeatherbyId (req, res){
    await Product.destroy({
        where: {
          id: req.params.id
        }
      });
      res.sendStatus(204);
}

module.exports = {
    getAllWeathers,
    getAllWeathersname,
    getAllWeatherbyId,
    putAllWeatherbyId,
    deleteAllWeatherbyId
}