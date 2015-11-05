module.exports = {
  options: {
    accessKey : '<%= secrets.qiniu.accessKey %>',
  	secretKey : '<%= secrets.qiniu.secretKey %>'
  },
  prod: {
    'files': [{
      'src': '<%= paths.dist_img %>/*',
      'dest': '/',
    }]
  }
};
