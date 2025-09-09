// Split-pop function for removing Unreal Engine variable types, i.e. "ESkillType::Attack" → "Attack".
export const sp = (str, delimiter = "::") => str.split(delimiter).pop()