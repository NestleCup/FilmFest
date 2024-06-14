import SkeletonLoad from '../../components/SkeletonLoad/SkeletonLoad'

export const skeletonArray = Array.from({ length: 20 }, (_, index) => {
  return <SkeletonLoad key={index} />
})
