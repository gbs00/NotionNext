export function getPublishDay(post) {
  return post?.date?.start_date || post?.publishDay || ''
}

export function formatPublishDay(day) {
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? day.replaceAll('-', '.') : day
}

export function getWeeklyHeadline(title) {
  const headline = title?.replace(
    /^有限周刊\s*[｜|]\s*\d{4}\.\d{2}\.\d{2}\s*[：:]\s*/,
    ''
  )
  return headline || title
}
