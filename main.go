package rumusmatematika

import "math"

func LuasPersegi(s int) int {
	return s * s
}

func KelilingPersegi(s int) int {
	return 4 * s
}

func LuasSegitiga(a, t int) int {
	return a * t / 2
}

func LuasLingkaran(r float32) float32 {
	const Phi float32 = 3.14
	return Phi * r * r
}

func VolumeKubus(s int) (result int) {
	return int(math.Pow(float64(s), 3))
}

func LuasPermukaanKubus(s int) (result int) {
	return s * s * 6
}

func VolumeBalok(p, l, t int) int {
	return p * l * t
}

func hitungLuasTrapesium(a, b, t int) int {
    luas := 0.5 * (a + b) * t
    return luas
}

func hitungVolumeBola(jariJari float64) float64 {
    volume := (4.0 / 3.0) * math.Pi * math.Pow(jariJari, 3)
    return volume
}