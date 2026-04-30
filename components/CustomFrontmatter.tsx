import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const CustomFrontmatter: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const fm = fileData.frontmatter

  if (!fm || (!fm['과목'] && fm['진도'] && fm['정답'] && fm['키워드'])) {
    return null
  }

  return (
    <div class={classNames(displayClass, "custom-fm-box")}>
      <div class="fm-grid">
        {fm['과목'] && <div class="fm-item"><strong>과목</strong><span>{fm['과목']}</span></div>}
        {fm['진도'] && <div class="fm-item"><strong>진도</strong><span>{fm['진도']}</span></div>}
        {fm['키워드'] && <div class="fm-item"><strong>키워드</strong><span>{fm['키워드']}</span></div>}
      </div>
      
      {/* 정답 부분: 클릭하여 확인하는 구조 */}
      {fm['정답'] && (
        <details class="fm-answer-details">
          <summary>정답 확인하기</summary>
          <div class="answer-content">
            {fm['정답']}
          </div>
        </details>
      )}
    </div>
  )
}

CustomFrontmatter.css = `
.custom-fm-box {
  margin: 1.5rem 0;
  padding: 1.2rem;
  background-color: var(--lightgray);
  border-radius: 6px;
  border: 1px solid var(--gray);
}

.fm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.fm-item {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

.fm-item strong {
  color: var(--secondary);
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
}

.fm-answer-details {
  border-top: 1px solid var(--gray);
  padding-top: 0.8rem;
}

.fm-answer-details summary {
  list-style: none;
  cursor: pointer;
  font-weight: bold;
  color: var(--tertiary);
  font-size: 0.9rem;
  user-select: none;
  transition: color 0.2s ease;
}

.fm-answer-details summary:hover {
  color: var(--secondary);
}

.fm-answer-details summary::-webkit-details-marker {
  display: none;
}

.answer-content {
  margin-top: 0.6rem;
  padding: 0.8rem;
  background-color: var(--light);
  border-radius: 4px;
  font-weight: 600;
  color: var(--dark);
  border: 1px dashed var(--tertiary);
}
`

export default (() => CustomFrontmatter) satisfies QuartzComponentConstructor