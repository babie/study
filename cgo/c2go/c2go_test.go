package c2go

import (
	"testing"
)

func TestBool(t *testing.T) {
	b, err := GetBool()
	if err != nil {
		t.Fatalf("failed test %#v", err)
	}
	if b != true {
		t.Fatalf("failed test")
	}
}
