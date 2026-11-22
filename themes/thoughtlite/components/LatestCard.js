import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { formatPublishDay, getPublishDay, getWeeklyHeadline } from './weeklyIssue'

/**
 * 首页「Latest」摘要块（对齐 ThoughtLite 演示站顶部引用样式）。
 */
export default function LatestCard({ post }) {
  if (!post?.href) return null
  const enabled = siteConfig('THOUGHTLITE_HOME_LATEST_CARD', true, CONFIG)
  if (!enabled) return null
  const day = getPublishDay(post)

  return (
    <aside className='tl-latest-card'>
      <h3>
        最新一期
        {day && <span className='ml-2'>发布于 {formatPublishDay(day)}</span>}
      </h3>
      <SmartLink
        href={post.href}
        className='block text-lg font-semibold leading-snug text-[var(--tl-text)] no-underline hover:text-[var(--tl-accent)] mb-2'>
        {getWeeklyHeadline(post.title)}
      </SmartLink>
      {post.summary ? (
        <p className='m-0 text-sm leading-relaxed text-[var(--tl-muted)] line-clamp-3'>
          {post.summary}
        </p>
      ) : null}
    </aside>
  )
}
