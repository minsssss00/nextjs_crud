import React from 'react'
import MyButton from './MyButton'
import MyHeader from './MyHeader'

export const DiaryEditor = () => {
  return (
    <div className='DiaryEditor'>
      <div className='header_box'>
      <MyHeader
            headText={isEdit ? "Diary edit" : "Today's diary"}
            leftChild={
              <MyButton
                text={"<"}
                onClick={() => navigate(-1)} />
            }
            rightChild={
              isEdit && (
              <MyButton
                text={"삭제하기"} 
                type={"negative"} 
                onClick={handleRemove}
                />
              )
            }
          />
      </div>
    </div>
  )
}
