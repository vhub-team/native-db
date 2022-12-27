# scrShopWeaponComponentData

## Summary
Wrapper for new weapon shop items data

## Fields
* **INT** modType
* **BOOL** isDefault
* **INT** lockHash
* **INT** componentName
* **INT** id
* **INT** cost
* **TEXT_LABEL_31** label
* **TEXT_LABEL_31** componentDesc

## Notes
ModType returns a hash of the weapon component's attach point name (and not something sensible, like an enum of component types that matches code...)