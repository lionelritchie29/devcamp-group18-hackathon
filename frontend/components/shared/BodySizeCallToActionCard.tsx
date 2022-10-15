const BodySizeCallToActionCard = () => {
  return (
    <div style={{ color: '#F9F9F9' }} className='border border-gray-200 rounded-md px-2 py-3'>
      <div className='flex'>
        <div>
          <div className='w-12 h-12 rounded-md border bg-gray-100'>
            {/* <i className='fa-light fa-shirt text-black'></i> */}
          </div>
        </div>

        <div className='text-black ml-3'>
          <h3 className='font-semibold'>Ukuran badan</h3>
          <p className='text-sm'>
            Tentukan ukuran badanmu untuk mendapatkan rekomendasi ukuran yang sesuai
          </p>
        </div>
      </div>

      <button className='bg-primary-dark px-2 py-2 text-white font-semibold w-full rounded-md mt-3'>
        Coba sekarang
      </button>
    </div>
  );
};

export default BodySizeCallToActionCard;
