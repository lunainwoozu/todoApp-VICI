import { Trophy, CheckCircle, Star } from 'lucide-react'; // 아이콘 추가 임포트

const getBadgeIcon = (level) => {
  if (level >= 30) return <Trophy size={64} className="text-yellow-400" />;
  if (level >= 20) return <CheckCircle size={64} className="text-blue-400" />;
  return <Star size={64} className="text-gray-400" />;
};

const Badge = ({ badge }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      {/* 배지 레벨에 맞는 아이콘 표시 */}
      {getBadgeIcon(badge.level)}
      <h4 className="font-semibold text-sm text-center">{badge.name}</h4>
      <p className="text-xs text-gray-500">{badge.date}</p>
    </div>
  );
};

export default Badge;