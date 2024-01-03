export const isValidString = (value: any, optional:boolean = false, charLimit: number | undefined = undefined): boolean => {
  if(optional && value === undefined) {
    return true
  }

  if(charLimit && value.length > charLimit) {
    return false
  }

  return typeof value === "string" && value.trim() !== "";
};
export const isValidBoolean = (value: any, optional:boolean = false): boolean => {
  if(optional && value === undefined) {
    return true
  }
  return typeof value === "boolean";
};
export const isValidNumber = (value: any, optional:boolean = false): boolean => {
  if(optional && value === undefined) {
    return true
  }
  return typeof value === "number";
};

export const isValidEmail = (value: any, optional:boolean = false): boolean => {
  if(optional && value === undefined) {
    return true
  }
  if (!isValidString(value)) {
    throw new Error("Email not a string");
  }


  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(value)) {
    return true;
  }
  throw new Error("Email not valid");
};

export const isValidUsername = (value: any, optional:boolean = false): boolean => {
  if(optional && value === undefined) {
    return true
  }
  if (!isValidString(value)) {
    throw new Error("Username not a string");
  }

  const usernameRegex: RegExp = /^[a-zA-Z0-9_-]{4,15}$/;
  if (usernameRegex.test(value)) {
    return true;
  }
  throw new Error("Username not valid");
};

const DEFAULT_MAX_ARRAY_LENGTH = 100;
export const isValidArrayOfStrings = (value: any, optional:boolean = false, maxLengthOverride?: number): boolean => {
  if(optional && value === undefined) {
    return true
  }
  if(!Array.isArray(value)){
    throw new Error("Not an array");
  }
  if(value.length > (maxLengthOverride || DEFAULT_MAX_ARRAY_LENGTH)) {
    throw new Error("Array too big")
  }
  if (!value.every((item) => typeof item === 'string')) {
    throw new Error('Array elements are not all strings.');
  }

  return true;
};

export const isValidDiscordInvite = (value: any, optional:boolean = false): boolean => {
  if(optional && value === undefined) {
    return true
  }
  if (!isValidString(value)) {
    throw new Error("Discord invite not a string");
  }

  // eslint-disable-next-line no-useless-escape
  const usernameRegex: RegExp =
    /(https?:\/\/|http?:\/\/)?(www.)?(discord.(gg|io|me|li)|discordapp.com\/invite|discord.com\/invite)\/[^\s\/]+?(?=\b)/;
  if (usernameRegex.test(value)) {
    return true;
  }

  throw new Error("Discord invite not valid");
};
