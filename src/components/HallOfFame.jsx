import Badge from "./Badge";

const HallOfFame = ({badges}) => {

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-t-xl">
        {badges.length > 0 ? (
          badges.map(badge => (
            <Badge key={badge.id} badge={badge} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">아직 획득한 배지가 없습니다.</p>
        )}
    </div>
    </div>
  )
}

export default HallOfFame;