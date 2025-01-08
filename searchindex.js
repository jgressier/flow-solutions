Search.setIndex({"docnames": ["conservation/energy", "conservation/fanno", "conservation/massflow", "conservation/momentum", "conservation/rayleigh", "internal/nozzle-regime-details", "internal/nozzle-regimes", "intro", "supersonic/characteristics", "supersonic/conical-shocks", "supersonic/moc-expansion", "supersonic/moc-smoothwall", "supersonic/planar-shocks", "supersonic/shock-polar", "supersonic/shock-reflexion"], "filenames": ["conservation/energy.ipynb", "conservation/fanno.ipynb", "conservation/massflow.ipynb", "conservation/momentum.ipynb", "conservation/rayleigh.ipynb", "internal/nozzle-regime-details.ipynb", "internal/nozzle-regimes.ipynb", "intro.md", "supersonic/characteristics.ipynb", "supersonic/conical-shocks.ipynb", "supersonic/moc-expansion.ipynb", "supersonic/moc-smoothwall.ipynb", "supersonic/planar-shocks.ipynb", "supersonic/shock-polar.ipynb", "supersonic/shock-reflexion.ipynb"], "titles": ["Energy conservation", "Fanno flow", "Mass flow conservation", "Forces by momentum flux balance", "Rayleigh flow", "Detailed flow regimes", "Flow regimes", "Methods for incompressible and compressible flows", "Mach lines for 2d isentropic flows", "Conical shock waves", "Isentropic expansion", "supersonic flow over a bump", "2D weak attached shock", "Shock polar", "2D shock reflections"], "terms": {"import": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "numpi": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "np": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "matplotlib": [1, 2, 4, 5, 6, 8, 9, 10, 11, 14], "pyplot": [1, 2, 4, 5, 6, 8, 9, 10, 11, 14], "plt": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "aerokit": [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14], "aero": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "npoint": [1, 4, 9, 13], "100": [1, 2, 8, 9, 10, 11, 13], "gam": [1, 2, 4, 8, 9, 10, 11, 13, 14], "1": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "4": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "mmin": [1, 4], "0": [1, 2, 4, 5, 6, 9, 10, 11, 13, 14], "mmax": [1, 4], "mach": [1, 2, 4, 5, 6, 7, 9, 10, 11, 13, 14], "log10": [1, 4, 9, 13], "logspac": [1, 4, 9, 13], "fparam": 1, "maxfparam_mach": 1, "ts": [1, 4], "ts_tscri": [1, 4], "ps": [1, 4], "ps_pscri": [1, 4], "pi": [1, 4, 5, 11], "pi_picri": [1, 4], "v": [1, 2, 4], "v_vcri": [1, 4], "ds": [1, 4, 10, 11], "normd": [1, 4], "fig": [1, 2, 4, 8, 9, 10, 11, 13, 14], "ax0": [1, 2, 4], "ax1": [1, 2, 4], "subplot": [1, 2, 4], "2": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "figsiz": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "12": [1, 4, 9, 10, 11, 13, 14], "6": [1, 2, 4, 5, 6, 9, 10, 11, 13], "suptitl": [1, 9, 13, 14], "set_titl": [1, 4], "ratio": [1, 2, 14], "critic": 1, "state": 1, "gamma": [1, 2, 4, 8, 9, 10, 11, 13, 14], "1f": [1, 2, 4, 9, 13, 14], "fontsiz": [1, 4, 8, 9, 10, 11, 13, 14], "y": [1, 4, 9, 10, 11, 13, 14], "93": [1, 4, 14], "plot": [1, 2, 4, 5, 8, 9, 10, 11, 13, 14], "k": [1, 4, 5, 9, 13], "r": [1, 5, 8, 10, 11], "color": [1, 2, 4, 8, 10, 11, 14], "000088": 1, "0000ff": [1, 4], "009999": [1, 4], "legend": [1, 4, 9, 13], "paramet": [1, 5, 8, 10, 11, 14], "t_": [1, 4], "t": [1, 4, 9, 13], "star": [1, 4], "p_": [1, 4, 5], "p": [1, 4, 10, 11, 13], "p_i": [1, 4], "loc": [1, 4, 9, 13], "upper": [1, 4, 9, 13], "left": [1, 2, 4, 9, 13], "prop": [1, 4, 9, 10, 11, 13], "size": [1, 4, 5, 6, 9, 10, 11, 13], "10": [1, 2, 4, 9, 11, 13, 14], "axi": [1, 4, 8, 9, 10, 11, 13, 14], "set_xlabel": [1, 2, 4], "number": [1, 2, 4, 5, 14], "ylabel": [1, 5, 6, 9, 13, 14], "shock": [1, 6, 7], "angl": [1, 9, 13, 14], "sigma": [1, 2, 9, 13], "minorticks_on": [1, 9, 13], "grid": [1, 2, 4, 5, 6, 9, 13], "which": [1, 4, 5, 6, 9, 13, 14], "major": [1, 4, 5, 6, 9, 13], "linestyl": [1, 4, 5, 6, 9, 13], "alpha": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13], "5": [1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "minor": [1, 5, 6, 9, 13], "curv": [1, 2, 4, 5], "s": [1, 2, 4, 9, 13], "diagram": [1, 4], "mlab": 1, "append": [1, 5, 9, 13], "linspac": [1, 2, 5, 8, 9, 10, 11, 13], "7": [1, 5, 9, 10, 13], "tslab": 1, "dslab": 1, "ro": 1, "i": [1, 9, 10, 11, 13], "rang": [1, 10, 11], "len": 1, "text": [1, 7, 8, 9, 10, 11, 13], "m": [1, 2, 9, 10, 11, 13], "2g": 1, "horizontalalign": [1, 9, 13], "verticalalign": [1, 9, 13], "center": 1, "8": [1, 5, 6, 8, 9, 10, 11, 13, 14], "rotat": [1, 9, 13], "30": [1, 11], "sign": 1, "delta": [1, 4, 9, 13], "c_p": [1, 4], "set_ylabel": [1, 2, 4], "h": [1, 4], "tmp": 1, "ipykernel_1841": 1, "2279805882": 1, "py": [1, 10, 11], "userwarn": 1, "redundantli": 1, "defin": [1, 2, 5, 13, 14], "keyword": 1, "argument": 1, "fmt": 1, "string": 1, "The": [1, 2, 13], "take": 1, "preced": 1, "kei": [2, 5, 6], "principl": [2, 7], "steadi": [2, 8, 10, 11], "though": 2, "integr": 2, "sum": 2, "wide": 2, "us": [2, 13, 14], "averag": 2, "valu": [2, 5, 13], "surfac": 2, "suppos": 2, "normal": [2, 14], "veloc": 2, "In": [2, 10, 11], "context": 2, "dot": 2, "rho": [2, 13], "can": [2, 13, 14], "expand": 2, "frac": [2, 13], "p_t": [2, 5], "sqrt": [2, 5, 11, 13], "rt_t": 2, "m_r": 2, "where": [2, 10], "weight": 2, "function": [2, 8, 10, 11, 13, 14], "right": [2, 13], "def": [2, 5, 6, 8, 10, 11, 13, 14], "machplot": 2, "ax": [2, 8, 10, 11, 14], "name": 2, "global": [2, 8, 10, 11, 14], "set_xlim": [2, 8, 10, 11], "max": 2, "plot_arrow": 2, "xyfrom": 2, "xyto": 2, "red": [2, 14], "from": [2, 5, 8, 10, 11, 13, 14], "patch": 2, "fancyarrowpatch": 2, "arrow": 2, "mutation_scal": 2, "20": [2, 10, 14], "linewidth": [2, 5, 6, 8, 9, 10, 11, 14], "add_patch": 2, "marker": 2, "o": 2, "black": [2, 8, 10, 11, 14], "ms": [2, 5], "mr": 2, "return": [2, 8, 10, 11, 13], "05": [2, 5, 9, 13], "abov": 2, "diverg": 2, "duct": 2, "one": 2, "comput": [2, 7, 8, 10, 11, 14], "new": 2, "m_2": 2, "measur": 2, "initi": [2, 5, 13], "m_1": 2, "a_2": 2, "two": 2, "case": [2, 14], "ar": [2, 5, 6, 7, 13, 14], "below": 2, "subson": [2, 6], "impli": 2, "acceler": 2, "blue": 2, "superson": [2, 6, 8, 10, 14], "deceler": 2, "With": 2, "tip": 2, "class": 2, "section_ratio": 2, "mach_from_sigma": 2, "sigmavalu": 2, "mach_init": 2, "scipi": [2, 8, 10, 11], "optim": [2, 8, 10, 11], "newton": [2, 10, 11, 13], "lambda": [2, 10, 11], "solv": [2, 7, 10, 11], "3": [2, 4, 5, 6, 8, 9, 10, 11, 13, 14], "set_ylim": [2, 8, 10, 11], "print": [2, 5, 6, 10, 11, 14], "f": [2, 13], "obtain": [2, 13], "after": 2, "m1": [2, 14], "actual": 2, "proce": 2, "sig1": [2, 14], "sig2": [2, 14], "m2": [2, 14], "initialis": 2, "mr1": 2, "mr2": 2, "2f": 2, "28": 2, "13": [2, 11], "when": 2, "continu": 2, "through": 2, "vari": 2, "close": 2, "need": 2, "howev": 2, "demonstr": 2, "satisfi": 2, "given": 2, "other": 2, "If": 2, "appli": 2, "assum": 2, "same": [2, 5], "regim": [2, 7], "between": [2, 7, 13], "differ": 2, "select": 2, "made": 2, "some": [2, 7], "strategi": 2, "assumpt": 2, "pressur": [2, 14], "compat": 2, "relat": [2, 7], "those": 2, "consider": 2, "detail": 2, "identif": 2, "both": [2, 7], "provid": [2, 7], "base": [2, 9, 13], "figur": [2, 5, 6, 8, 9, 10, 11, 13, 14], "m2sub": 2, "m2sup": 2, "all": [2, 10], "implement": [2, 7, 13], "avail": 2, "python": [2, 7], "packag": [2, 10, 11], "massflow": [2, 5, 6], "subpackag": 2, "rai": 4, "200": [4, 5, 9, 10, 13], "tparam": 4, "maxtiratio_mach": 4, "ti": 4, "ti_ticri": 4, "ff0000": 4, "882222": 4, "222288": 4, "t_i": 4, "common": [5, 6, 8, 10, 11, 14], "defaultga": [5, 6, 8, 10, 11, 14], "defg": [5, 6], "Is": [5, 6, 13], "shockwav": [5, 6, 8, 9, 10, 11, 13, 14], "sw": [5, 6, 8, 9, 10, 11, 13, 14], "mf": [5, 6], "nz": [5, 6], "inlin": [5, 6, 8, 10, 11, 14], "rcparam": [5, 6, 9], "font": [5, 6, 9], "14": [5, 6, 8, 9, 10, 11, 13, 14], "line": [5, 6, 7, 9, 10, 11, 13, 14], "slide": [5, 6], "24": [5, 6, 10], "new_plot": [5, 6], "xlab": [5, 6], "ylab": [5, 6], "15": [5, 6, 9, 10, 11, 13], "xlabel": [5, 6, 9, 13, 14], "target_aoac": [5, 6], "length": [5, 6, 8, 10, 11, 14], "set": [5, 8, 10, 11, 14], "an": [5, 7, 13], "A": 5, "ac": 5, "law": 5, "evolut": 5, "ensur": 5, "consist": 5, "As": 5, "noz_x": 5, "endpoint": 5, "true": [5, 8, 10, 11, 14], "ma_max": 5, "mach_sigma": 5, "ma": 5, "sin": [5, 10, 11, 14], "noz_aoac": 5, "sigma_mach": 5, "x": [5, 8, 10, 11], "a_c": 5, "coord_x": 5, "coordin": 5, "addit": 5, "point": 5, "npr": [5, 6], "msub": [5, 6], "machsub_sigma": [5, 6], "npr0": [5, 6], "pips_mach": [5, 6], "msup": [5, 6], "machsup_sigma": [5, 6], "npr1": [5, 6], "msh": [5, 6], "downstream_mn": [5, 6, 14], "nprsw": [5, 6], "pi_ratio": [5, 6], "nwith": [5, 6], "respect": [5, 6], "006601275229614": [5, 6], "831391753467699": [5, 6], "63": [5, 6], "12853673524992": [5, 6], "09699610094784036": [5, 6], "45657039307189745": [5, 6], "3678724173613803": [5, 6], "ma_col": 5, "_m": 5, "add": 5, "constant": 5, "_pt": 5, "_p": 5, "line2d": [5, 14], "0x7f4b400f4a00": 5, "ylim": [5, 8, 10, 11, 14], "0x7f4b4047e580": 5, "_minit": 5, "guess": 5, "converg": 5, "0x7f4b429f2df0": 5, "thi": [5, 7, 13, 14], "previou": 5, "cell": [5, 10, 11], "repeat": 5, "make": 5, "self": 5, "ptloss": 5, "0x7f4b428cbbe0": 5, "po": 5, "control": 5, "posit": 5, "analyt": 5, "solut": [5, 10, 11, 13], "_gamma": 5, "wave": [5, 7, 13, 14], "loss": 5, "upsptream": 5, "mn_pi_ratio": 5, "redefin": 5, "start": 5, "ish": 5, "index": 5, "closest": 5, "ab": [5, 10, 11], "argmin": 5, "0x7f4b427ea610": 5, "isentrop": [6, 7, 13], "nozzl": 6, "choke": 6, "exit": 6, "limit": [6, 14], "jupyt": 7, "book": 7, "serv": 7, "comprehens": 7, "collect": 7, "illustr": 7, "exampl": [7, 14], "analyz": 7, "fluid": 7, "varieti": 7, "scenario": 7, "includ": 7, "design": 7, "research": 7, "student": 7, "profession": 7, "dynam": 7, "resourc": 7, "focus": 7, "practic": 7, "techniqu": 7, "rather": 7, "than": 7, "exhaust": 7, "explor": 7, "theoret": 7, "foundat": 7, "while": [7, 10, 11], "present": 7, "here": 7, "valuabl": 7, "insight": 7, "problem": [7, 8, 10, 11, 14], "user": 7, "encourag": 7, "supplement": 7, "learn": 7, "materi": 7, "deeper": 7, "understand": 7, "model": 7, "underli": 7, "aim": 7, "bridg": 7, "gap": 7, "knowledg": 7, "applic": 7, "empow": 7, "reader": 7, "tackl": 7, "real": 7, "world": 7, "challeng": 7, "confid": 7, "most": [7, 10, 11], "directli": [7, 14], "written": 7, "Then": 7, "concis": 7, "effici": 7, "more": 7, "complex": 7, "jgressier": 7, "mass": 7, "forc": 7, "momentum": 7, "flux": 7, "balanc": 7, "fanno": 7, "energi": 7, "rayleigh": 7, "polar": [7, 9], "2d": 7, "weak": 7, "attach": 7, "conic": 7, "math": [8, 11, 14], "scopt": [8, 10, 11], "degre": [8, 9, 10, 11, 13, 14], "deg": [8, 9, 10, 11, 13, 14], "trigo": [8, 10, 11, 14], "unit": [8, 10, 11, 14], "support": [8, 10, 11, 14], "sup": [8, 10, 11], "rc": [8, 10, 11], "usetex": [8, 10, 11], "sty_carac": [8, 10, 11], "orang": [8, 10, 11], "sty_wal": [8, 10, 11], "sty_flow": [8, 10, 11], "green": [8, 10, 11], "sty_text": [8, 10, 11], "On": [8, 10, 11], "d\u00e9finit": [8, 10, 11], "tout": [8, 10, 11], "d": [8, 10, 11], "abord": [8, 10, 11], "le": [8, 10, 11], "param\u00e8tr": [8, 10, 11], "de": [8, 14], "ce": [8, 10, 11], "ca": [8, 10, 11], "il": [8, 10, 11], "sont": [8, 10, 11], "d\u00e9fini": [8, 10, 11], "comm": [8, 10, 11], "variabl": [8, 10, 11, 14], "que": [8, 10, 11], "l": [8, 10, 11], "peut": [8, 10, 11], "utilis": [8, 10, 11], "direct": [8, 10, 11, 13], "dan": [8, 10, 11], "fonction": [8, 10, 11, 14], "par": [8, 10, 11], "exempl": [8, 10, 11], "definit": [8, 10, 11, 13, 14], "set_gamma": [8, 10, 11, 14], "m0": [8, 10, 11, 14], "xmax": [8, 10, 11], "xmin": [8, 10, 11], "ymin": [8, 10, 11], "ymax": [8, 10, 11], "geometri": [8, 10, 11, 14], "ywall": [8, 10, 11], "exp": [8, 11], "wall_angl": [8, 10, 11], "ep": [8, 10, 11], "1e": [8, 10, 11], "atan": [8, 9, 10, 11, 13], "zoom": [8, 10, 11, 14], "facecolor": [8, 9, 10, 11, 13], "white": [8, 9, 10, 11, 13], "add_subplot": [8, 10, 11, 14], "111": [8, 10, 11, 14], "xneg": [8, 10, 11, 14], "aspect": [8, 10, 11, 14], "equal": [8, 10, 11, 14], "off": [8, 10, 11], "set_facecolor": [8, 10, 11], "depend": [8, 10, 11, 13], "backend": [8, 10, 11], "xlim": [8, 10, 11, 14], "plot_geom": [8, 10, 11, 14], "101": [8, 10, 11], "fill": [8, 10, 11], "concaten": [8, 10, 11], "lightgrai": [8, 10, 11], "zorder": [8, 10, 11], "m_0": [8, 10, 11, 13], "format": [8, 10, 11, 14], "backgroundcolor": [8, 10, 11], "tight_layout": [8, 10, 11], "test": [8, 11, 14], "la": [8, 10, 11, 14], "trac\u00e9": [8, 10, 11, 14], "dpi": 9, "150": 9, "updat": 9, "16": [9, 10, 11, 13], "90": [9, 13], "macharrai": [9, 13], "25": [9, 10, 13], "9": [9, 10, 11, 13], "sig": [9, 13], "asin": [9, 10, 11, 13], "sigma_son": [9, 13], "dev": [9, 13, 14], "conical_deflection_mach_sigma": 9, "ilab": [9, 13], "int": [9, 10, 11, 13], "figratio": [9, 13], "ang": [9, 10, 11, 13], "3g": [9, 13], "top": [9, 13, 14], "bbox": [9, 13], "dict": [9, 13], "edgecolor": [9, 13], "grei": [9, 13], "01": [9, 13], "50": [9, 13, 14], "maximum": [9, 13, 14], "deviat": [9, 13, 14], "sigma_devmax": [9, 13], "sonic": [9, 13, 14], "b": [9, 10, 13], "label": [9, 13], "result": [9, 10, 11, 13], "time": [9, 13], "theta": [9, 13], "flow": [10, 14], "om0": [10, 11], "prandtlmeyer_mach": [10, 11], "mu0": [10, 11], "mach_wal": [10, 11], "mach_prandtlmey": [10, 11], "mw": [10, 11], "e": [10, 11], "th": [10, 11], "th0": [10, 11], "om1": [10, 11], "th1": [10, 11], "thpmu": [10, 11], "slope": [10, 11], "tan": [10, 11, 13, 14], "intersect": [10, 11], "wall": [10, 11, 14], "xwall": [10, 11], "fsolv": [10, 11], "xw": [10, 11], "plot_cp_wal": [10, 11], "plot_cp": [10, 11], "n": [10, 11, 14], "51": [10, 11], "fill_expans": [10, 11], "caract\u00e9ristiqu": [10, 11], "wang1": [10, 11], "mu1": [10, 11], "wang0": [10, 11], "flow_prop": [10, 11], "mu": [10, 11], "integ": [10, 11], "ctype": [10, 11], "smin": [10, 11], "smax": [10, 11], "npt": [10, 11], "step": [10, 11], "x0": [10, 11], "y0": [10, 11], "co": [10, 11], "trajx": [10, 11], "zero": [10, 11, 13], "traji": [10, 11], "nforw": [10, 11], "nback": [10, 11], "sx": [10, 11], "sy": [10, 11], "backward": [10, 11], "px": [10, 11], "rk2": [10, 11], "predictor": [10, 11], "final": [10, 11], "forward": [10, 11], "plot_cm": [10, 11], "31": [10, 11], "xcm": [10, 11], "ycm": [10, 11], "ctx": [10, 11], "cty": [10, 11], "keyboardinterrupt": [10, 11], "traceback": [10, 11], "recent": [10, 11], "call": [10, 11], "last": [10, 11], "17": [10, 11], "18": [10, 11, 14], "19": 10, "22": 10, "23": 10, "26": 10, "file": [10, 11], "work": [10, 11], "venv": [10, 11], "lib": [10, 11], "python3": [10, 11], "site": [10, 11], "68": [10, 11], "omega": [10, 11], "65": [10, 11], "67": [10, 11], "iterativesolv": [10, 11], "secant_solv": [10, 11], "omega_of_mach": [10, 11], "69": [10, 11], "els": [10, 11], "item": [10, 11], "_zeros_pi": [10, 11], "358": 10, "func": [10, 11], "fprime": [10, 11], "arg": [10, 11], "tol": [10, 11], "maxit": [10, 11], "fprime2": [10, 11], "x1": [10, 11], "rtol": [10, 11], "full_output": [10, 11], "disp": [10, 11], "356": 10, "357": 10, "q1": [10, 11], "q0": [10, 11], "p0": [10, 11, 14], "p1": [10, 11, 14], "isclos": 10, "atol": 10, "359": 10, "_results_select": 10, "360": 10, "funcal": [10, 11], "itr": 10, "_econverg": 10, "361": [10, 11], "__array_function__": 10, "intern": 10, "kwarg": 10, "core": 10, "numer": 10, "2380": 10, "equal_nan": 10, "2378": 10, "yfin": 10, "isfinit": 10, "2379": 10, "xfin": 10, "within_tol": 10, "2381": 10, "2382": 10, "finit": 10, "2361": 10, "local": [10, 11], "2359": 10, "2360": 10, "errstat": 10, "invalid": 10, "ignor": 10, "_no_nep50_warn": 10, "less_equ": 10, "11": 11, "32": [11, 14], "33": 11, "34": 11, "363": 11, "362": 11, "364": 11, "366": 11, "64": 11, "53": 11, "beta": 11, "52": 11, "cg": 11, "g": 11, "gm1": 11, "arctan": 11, "180": 11, "we": [13, 14], "first": 13, "propos": 13, "1d": 13, "jump": 13, "upstream": [13, 14], "ordinari": 13, "machin": 13, "check": 13, "tabl": 13, "refer": 13, "rho_1": 13, "rho_0": 13, "m_": 13, "n0": 13, "qquad": 13, "p_1": 13, "p_0": 13, "n1": 13, "rho_ratio_from_mn": 13, "mn": 13, "ps_ratio_from_mn": 13, "mn1_from_mn": 13, "idempot": 13, "now": 13, "calcul": 13, "either": 13, "see": 13, "procedur": 13, "iter": 13, "There": 13, "To": 13, "method": 13, "you": 13, "must": 13, "look": 13, "process": 13, "signific": 13, "improv": 13, "mu_0": 13, "downstream": [13, 14], "characterist": 13, "mu_1": 13, "also": 13, "minimum": 13, "know": 13, "estim": 13, "deflection_mach_sigma": 13, "thei": 14, "wdev": 14, "upwstream": 14, "devmax": 14, "dev_max": 14, "devson": 14, "dev_son": 14, "For": 14, "59": 14, "sigma_mach_deflect": 14, "mn0": 14, "p1p0": 14, "ps_ratio": 14, "mn1": 14, "ndownstream": 14, "ncompress": 14, "37": 14, "961": 14, "compress": 14, "168": 14, "p2p1": 14, "mn2": 14, "reflexion": 14, "p2": 14, "p2p0": 14, "96": 14, "274": 14, "54": 14, "yend": 14, "75": 14, "draw": 14, "xup": 14, "impact": 14, "xbot": 14, "abscissa": 14, "0x7ff090f4cb20": 14, "shockpolar": 14, "swplt": 14, "figure_theta_pressur": 14, "static": 14, "yscale": 14, "linear": 14, "default": 14, "logarithm": 14, "plot_theta_pressur": 14, "thet_init": 14, "p_init": 14, "symbol": 14, "region": 14, "bo": 14, "go": 14, "0x7ff090ea3b20": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"energi": 0, "conserv": [0, 2, 7], "fanno": 1, "flow": [1, 2, 4, 5, 6, 7, 8, 11], "mass": 2, "variat": 2, "section": 2, "thi": 2, "admonit": 2, "wa": 2, "style": 2, "multipl": 2, "solut": 2, "an": 2, "expect": 2, "forc": 3, "momentum": 3, "flux": 3, "balanc": 3, "rayleigh": 4, "detail": 5, "regim": [5, 6], "comput": 5, "limit": 5, "isentrop": [5, 8, 10], "subson": 5, "choke": 5, "superson": [5, 7, 11], "nozzl": 5, "normal": 5, "shock": [5, 9, 12, 13, 14], "exit": 5, "diffus": 5, "method": 7, "incompress": 7, "compress": [7, 10], "law": 7, "intern": 7, "mach": 8, "line": 8, "2d": [8, 12, 14], "conic": 9, "wave": 9, "expans": 10, "faisceau": [10, 11], "de": [10, 11], "d\u00e9tent": [10, 11], "integr": [10, 11], "trajectoir": [10, 11], "et": [10, 11], "c": [10, 11], "progress": 10, "over": 11, "bump": 11, "weak": 12, "attach": 12, "polar": [13, 14], "rankin": 13, "hugoniot": 13, "equat": 13, "reflect": 14, "initi": 14, "first": 14, "represent": 14, "curv": 14}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})