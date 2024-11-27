import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"

const ParticlesBackground = () => {
  const [init, setInit] = useState(false)
  const [particleOptions, setParticleOptions] = useState(null)

  useEffect(() => {
    const initializeParticles = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadFull(engine)
        })
        setInit(true)
      } catch (error) {
        console.error("Failed to initialize particles engine:", error)
      }
    }

    initializeParticles()
  }, [])

  useEffect(() => {
    const loadParticlesConfig = async () => {
      try {
        const response = await fetch("/particles.json")
        const data = await response.json()
        setParticleOptions(data)
      } catch (error) {
        console.error("Failed to load particles.json:", error)
      }
    }

    loadParticlesConfig()
  }, [])

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          options={particleOptions}
        />
      )}
    </div>
  )
}

export default ParticlesBackground
