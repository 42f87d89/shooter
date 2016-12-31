function loggerSystem(e) {
    if(e.logger === undefined) return;
    console.log(e.logger.message);
}