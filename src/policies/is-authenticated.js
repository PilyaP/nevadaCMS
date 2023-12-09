module.exports = (policyContext, config, { strapi }) => {
  if (policyContext.state.user) {
    return true; // Продолжить выполнение, если пользователь аутентифицирован
  } else {
    return false; // Запретить доступ, если пользователь не аутентифицирован
  }
};
