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

func VolumeLingkaran(s int) (result int) {
	return int(math.Pow(float64(s), 3))
}
