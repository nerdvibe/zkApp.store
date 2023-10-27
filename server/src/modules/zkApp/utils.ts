export const isValidSlug = (slug: string): boolean => {
  const slugRegex: RegExp = /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/;

  return slugRegex.test(slug);
}

export const isValidVersion = (version: string): boolean => {
  const versionRegex: RegExp = /^\d+\.\d+\.\d+$/;

  if(version.length > 11) {
    return false
  }

  return versionRegex.test(version);
}
