import { BoardJobs } from '@/components/Jobs/JobFilter'

export const calculateTotalJobCount = (units: BoardJobs): number => {
  if (!units) {
    return 0
  }
  return Object.keys(units).reduce((sum, unit) => sum + units[unit].length, 0)
}
