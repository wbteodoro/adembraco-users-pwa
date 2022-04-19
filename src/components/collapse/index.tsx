import React, { PropsWithChildren, useCallback, useRef, ReactNode } from 'react'
import * as S from './styles'

export type CollapseProps = {
  heading: string | ReactNode
  children: ReactNode
  icon?: ReactNode
  withoutExpandIcon?: boolean
  isOpen: boolean
  disabled?: boolean
  setOpen?: (value: number | ((prevState: number) => number)) => void
  order?: number
}

const Collapse = ({
  icon,
  heading,
  children,
  withoutExpandIcon,
  isOpen,
  order,
  disabled = true,
  setOpen
}: PropsWithChildren<CollapseProps>) => {
  const contentElement = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(() => {
    if (order === undefined) return
    !!setOpen && setOpen(prevState => (prevState === order ? -1 : order))
  }, [order, setOpen])

  const expandedIcon = () =>
    isOpen ? <S.ExpandLessIcon /> : <S.ExpandMoreIcon />

  return (
    <S.Wrapper>
      <S.CollapseHeader disabled={disabled} onClick={handleClick}>
        <S.HeadingWrapper>
          {!!icon && icon}
          {heading}
        </S.HeadingWrapper>
        {!withoutExpandIcon && expandedIcon()}
      </S.CollapseHeader>
      <S.CollapseContent
        style={{ height: isOpen ? 'auto' : 0 }}
        ref={contentElement}
        aria-hidden={!isOpen}
      >
        {children}
      </S.CollapseContent>
    </S.Wrapper>
  )
}

export default Collapse
