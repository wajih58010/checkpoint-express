const time = (req, res, next) => {
  let today = new Date();
  if (
    today.getHours() > 9 &&
    today.getHours() < 17 &&
    today.getDay() !== 6 &&
    today.getDay() !== 7
  ) {
    next();
  } else {
    res.send(
      "The web application is only available in working time (Monday to Friday,  from 9 to 17)  !!!"
    );
  }
};

module.exports = time;
