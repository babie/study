package c2go

import (
	"testing"
)

func TestGetInt(t *testing.T) {
	b := GetInt()
	if b != 42 {
		t.Fatalf("Test failed: b = %#v", b)
	}
}
