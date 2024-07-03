
export default function Modal({isOpen, setModalOpen, children}) {

    if(isOpen){
        return (
            <>
              <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 z-[1000] text-black">
                <div className="flex flex-col gap-7 fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] bg-white p-24 rounded-md">
                    {children}
                    <button className="bg-primary py-2 px-4 rounded w-20" onClick={setModalOpen}>Fechar</button>
                </div>
              </div>
            </>
          );
    }
  
}
