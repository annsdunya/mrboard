"use client"

import { useRenameModal } from "@/store/use-rename-modal"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export const RenameModal = () => {
  const { isOpen, onClose, initialValues } = useRenameModal()

  // 1. State สำหรับเก็บค่า title ที่ผู้ใช้พิมพ์แก้ไขใน Input
  const [title, setTitle] = useState(initialValues.title)

  // 2. State ตัวช่วยสำหรับจำว่าค่าเริ่มต้น (initialValues.title) ครั้งล่าสุดคืออะไร
  const [prevInitialTitle, setPrevInitialTitle] = useState(initialValues.title)

  // 3. เช็คเงื่อนไขระหว่างการเรนเดอร์ (แทนการใช้ useEffect)
  if (initialValues.title !== prevInitialTitle) {
    // ถ้าพบว่าค่าจาก Store เปลี่ยนไป (เช่น กดเปิด Modal ของบอร์ดอื่น)
    // ให้ทำการรีเซ็ตค่า State ทั้งคู่ทันที
    setPrevInitialTitle(initialValues.title)
    setTitle(initialValues.title)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Enter a new title for this board.
        </DialogDescription>
        
        {/* ตัวอย่าง Input ที่คุณน่าจะเพิ่มเข้ามาเพื่อใช้ร่วมกับ title */}
        {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}
      </DialogContent>
    </Dialog>
  )
}