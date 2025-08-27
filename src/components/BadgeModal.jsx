import { Award } from 'lucide-react';

const BadgeModal = ({ setIsBadgeModalOpen }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="p-6 text-center bg-white rounded-lg shadow-lg">
        <Award size={64} className="mx-auto text-yellow-500 mb-4" />
        <h3 className="text-2xl font-bold mb-2">축하합니다!</h3>
        <p className="text-gray-600">새로운 배지를 획득했습니다.</p>
      </div>
    </div>
  );
};

export default BadgeModal;