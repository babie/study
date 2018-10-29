package c2go

/*
#include "c2go.h"
*/
import "C"

// St struct for copy
type St struct {
	Bt bool
	Bf bool
	Ni int
	Nf float32
	Nd float64
	Cs string
}

// GetTrue Get true value
func GetTrue() bool {
	b := bool(C.bt)
	return b
}

// GetFalse Get false value
func GetFalse() bool {
	b := bool(C.bf)
	return b
}

// GetInt Get int value
func GetInt() int {
	n := int(C.ni)
	return n
}

// GetFloat Get float value
func GetFloat() float32 {
	n := float32(C.nf)
	return n
}

// GetDouble Get double value
func GetDouble() float64 {
	n := float64(C.nd)
	return n
}

// GetChars Get char* value
func GetChars() string {
	s := C.GoString(C.cs)
	return s
}

// GetStruct Get struct
func GetStruct() St {
	s := C.st
	st := St{
		Bt: bool(s.bt),
		Bf: bool(s.bf),
		Ni: int(s.ni),
		Nf: float32(s.nf),
		Nd: float64(s.nd),
		Cs: C.GoString(s.cs),
	}
	return st
}
