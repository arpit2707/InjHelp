const Product = require('../models/user');

exports.postLogin=(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.pwd;
    
Product.sync()
  .then(() => {
    // Insert a new user
    return Product.create({
      email: email,
      password: password
    });
  })
  .then(() => {
    console.log('User created successfully!');
  })
  .catch(err => {
    // If table doesn't exist, create the table and insert a new user
    if (err.name === 'SequelizeDatabaseError' && err.parent.code === 'ER_NO_SUCH_TABLE') {
      Product.query('CREATE TABLE `users` ( `id` INT NOT NULL AUTO_INCREMENT , `email` VARCHAR(255) NOT NULL , `password` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;')
        .then(() => {
          console.log('Table created successfully!');
          return Product.create({
            email: email,
            password: password
          });
        })
        .then(() => {
          console.log('User created successfully!');
        })
        .catch(err => {
          console.error('Error:', err);
        });
    } else {
      console.error('Error:', err);
    }
  });
    res.redirect('/User');
}

exports.getUSers=(req,res,next)=>{
    Product.findAll().then(users=>{
        res.render('User',{
            users:users,
            path:'/login'
        });
    })
}

exports.deleteUser=(req,res,next)=>{
    const userId = req.body.userId;
    Product.findByPk(userId).then((user)=>{
        return user.destroy();
    }).then(()=>{
        res.redirect('/User')
    }).catch(err=>{
        console.log(err);
    })
}