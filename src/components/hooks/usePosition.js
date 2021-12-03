import React, {useEffect, useState} from "react"

export function usePosition(ref) {
    function getPrevElement(list) {
      const sibling = list[0].previousElementSibling;

      if (sibling instanceof HTMLElement) {
        return sibling;
      }

      return sibling;
    }

    function getNextElement(list) {
      const sibling = list[list.length - 1].nextElementSibling;
      if (sibling instanceof HTMLElement) {
        return sibling;
      }
      return null;
    }
    const [prevElement, setPrevElement] = useState(null)
    const [nextElement, setNextElement] = useState(null)
    useEffect(() => {
        const element = ref.current
        const update = () => {
            const rect = element.getBoundingClientRect()
            const visibleElements = Array.from(element.children).filter((child) => {
                const childRect = child.getBoundingClientRect()
                return rect.left <= childRect.left && rect.right >= childRect.right
            })
            if (visibleElements.length > 0) {
                setPrevElement(getPrevElement(visibleElements))
                setNextElement(getNextElement(visibleElements))
            }
        }

        update()
        element.addEventListener('scroll', update, { passive: true })
        return () => {
            element.removeEventListener('scroll', update, { passive: true })
        }
    }, [ref])

      const scrollToElement = React.useCallback(
        (element) => {
          const currentNode = ref.current;

          if (!currentNode || !element) return;

          let newScrollPosition;

          newScrollPosition =
            element.offsetLeft +
            element.getBoundingClientRect().width / 2 -
            currentNode.getBoundingClientRect().width / 2;

          currentNode.scroll({
            left: newScrollPosition,
            behavior: "smooth",
          });
        },
        [ref]
      );

      const scrollRight = React.useCallback(
        () => scrollToElement(nextElement),
        [scrollToElement, nextElement]
      );

      const scrollLeft = React.useCallback(
        () => scrollToElement(prevElement),
        [scrollToElement, prevElement]
      );
 return {
   hasItemsOnLeft: prevElement !== null,
   hasItemsOnRight: nextElement !== null,
   scrollRight,
   scrollLeft,
 };   
}
