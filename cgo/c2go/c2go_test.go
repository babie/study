package c2go

import (
	"testing"
)

func TestGetTrue(t *testing.T) {
	b := GetTrue()
	if b != true {
		t.Fatalf("GetTrue() returns %#v", b)
	}
}

func TestGetFalse(t *testing.T) {
	b := GetFalse()
	if b != false {
		t.Fatalf("GetFalse() returns %#v", b)
	}
}

func TestGetInt(t *testing.T) {
	n := GetInt()
	if n != 42 {
		t.Fatalf("GetInt() returns %#v", n)
	}
}

func TestGetFloat(t *testing.T) {
	n := GetFloat()
	if n != 1.4141356 {
		t.Fatalf("GetFloat() returns %#v", n)
	}
}

func TestGetDouble(t *testing.T) {
	n := GetDouble()
	if n != 3.14159265359 {
		t.Fatalf("GetDouble() returns %#v", n)
	}
}

func TestGetChars(t *testing.T) {
	s := GetChars()
	if s != "foo" {
		t.Fatalf("GetChars() returns %#v", s)
	}
}

func TestGetStruct(t *testing.T) {
	s := GetStruct()
	if s.Bt != true {
		t.Fatalf("GetStruct().Bt returns %#v", s.Bt)
	}
	if s.Bf != false {
		t.Fatalf("GetStruct().Bf returns %#v", s.Bf)
	}
	if s.Ni != 42 {
		t.Fatalf("GetStruct().Ni returns %#v", s.Ni)
	}
	if s.Nf != 1.4141356 {
		t.Fatalf("GetStruct().Nf returns %#v", s.Nf)
	}
	if s.Nd != 3.14159265359 {
		t.Fatalf("GetStruct().Nd returns %#v", s.Nd)
	}
	if s.Cs != "foo" {
		t.Fatalf("GetStruct().Cs returns %#v", s.Cs)
	}
}
