import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
  ReactNode
} from 'react'
import * as S from './styles'

export type CollapseProps = {
  heading: string | ReactNode
  children: ReactNode
  icon?: ReactNode
  withoutExpandIcon?: boolean
  isOpen: boolean
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
  setOpen
}: PropsWithChildren<CollapseProps>) => {
  const contentElement = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState<string>(
    `${headerRef.current && headerRef.current.scrollHeight}px`
  )

  const handleClick = useCallback(() => {
    if (order === undefined) return
    !!setOpen && setOpen(prevState => (prevState === order ? -1 : order))
    setMaxHeight(
      `${
        !isOpen
          ? ((headerRef.current && headerRef.current.clientHeight) || 0) +
            ((contentElement.current && contentElement.current.clientHeight) ||
              0)
          : headerRef.current && headerRef.current.scrollHeight
      }px`
    )
  }, [isOpen, order, setOpen])

  useEffect(() => {
    !isOpen &&
      setMaxHeight(`${headerRef.current && headerRef.current.scrollHeight}px`)
  }, [isOpen, order, setOpen])

  const expandedIcon = () =>
    isOpen ? <S.ExpandLessIcon /> : <S.ExpandMoreIcon />

  return (
    <S.Wrapper style={{ maxHeight }}>
      <S.CollapseHeader ref={headerRef} onClick={handleClick}>
        <S.HeadingWrapper>
          {!!icon && icon}
          {heading}
        </S.HeadingWrapper>
        {!withoutExpandIcon && expandedIcon()}
      </S.CollapseHeader>
      <S.CollapseContent ref={contentElement} aria-hidden={!isOpen}>
        {children}
      </S.CollapseContent>
    </S.Wrapper>
  )
}

export default Collapse
