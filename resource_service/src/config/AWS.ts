import AWS from "aws-sdk";
AWS.config.loadFromPath("./src/config/config.json");
export default AWS;
