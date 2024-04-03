import React from 'react'

//Checkbox implementation for row selection
export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

  return (
    <>
        <input type='checkbox' ref={resolvedRef} {...rest} />
    </>
  )
})
