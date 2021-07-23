/* eslint-disable-line */ const aws = require("aws-sdk");

exports.handler = async (event, context, callback) => {
  const cognitoProvider = new aws.CognitoIdentityServiceProvider({
    apiVersion: "2016-04-18",
  });

  let isAdmin = false;

  //관리자 이메일 설정
  const adminEmails = ["chjm219@kookmin.ac.kr", "chjm219@gmail.com"];

  if (adminEmails.indexOf(event.request.userAttributes.email) !== -1) {
    isAdmin = true;
  }
  const groupParams = {
    UserPoolId: event.userPoolId,
  };

  const userParams = {
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  if (isAdmin) {
    groupParams.GroupName = "Admin";
    userParams.GroupName = "Admin";

    try {
      await cognitoProvider.getGroup(groupParams).promise();
    } catch (err) {
      await cognitoProvider.createGroup(groupParams).promise();
    }

    try {
      await cognitoProvider.adminAddUserToGroup(userParams).promise();
      callback(null, event);
    } catch (err) {
      callback(err);
    }
  } else {
    callback(null, event);
  }
};
