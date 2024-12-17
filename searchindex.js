Search.setIndex({"docnames": ["conservation/energy", "conservation/massflow", "conservation/momentum", "internal/nozzle-regime-details", "internal/nozzle-regimes", "intro", "supersonic/characteristics", "supersonic/conical-shocks", "supersonic/moc-expansion", "supersonic/moc-smoothwall", "supersonic/planar-shocks", "supersonic/shock-polar", "supersonic/shock-reflexion"], "filenames": ["conservation/energy.ipynb", "conservation/massflow.ipynb", "conservation/momentum.ipynb", "internal/nozzle-regime-details.ipynb", "internal/nozzle-regimes.ipynb", "intro.md", "supersonic/characteristics.ipynb", "supersonic/conical-shocks.ipynb", "supersonic/moc-expansion.ipynb", "supersonic/moc-smoothwall.ipynb", "supersonic/planar-shocks.ipynb", "supersonic/shock-polar.ipynb", "supersonic/shock-reflexion.ipynb"], "titles": ["Energy conservation", "Mass flow conservation", "Forces by momentum flux balance", "Detailed flow regimes", "Flow regimes", "Methods for incompressible and compressible flows", "Mach lines for 2d isentropic flows", "Conical shock waves", "Isentropic expansion", "supersonic flow over a bump", "2D weak attached shock", "Shock polar", "2D shock reflections"], "terms": {"kei": [1, 3, 4], "principl": [1, 5], "steadi": [1, 6, 8, 9], "though": 1, "defin": [1, 3, 11, 12], "an": [1, 3, 5, 11], "integr": 1, "sum": 1, "wide": 1, "us": [1, 11, 12], "averag": 1, "valu": [1, 3, 11], "The": [1, 11], "surfac": 1, "suppos": 1, "normal": [1, 12], "veloc": 1, "In": [1, 8, 9], "context": 1, "dot": 1, "m": [1, 7, 8, 9, 11], "rho": [1, 11], "v": 1, "can": [1, 11, 12], "expand": 1, "frac": [1, 11], "p_t": [1, 3], "sqrt": [1, 3, 11], "rt_t": 1, "m_r": 1, "where": [1, 8], "weight": 1, "function": [1, 6, 8, 9, 11, 12], "gamma": [1, 6, 7, 8, 9, 11, 12], "left": [1, 7, 11], "1": [1, 3, 4, 6, 7, 8, 9, 11, 12], "2": [1, 3, 4, 6, 7, 8, 9, 11, 12], "right": [1, 11], "import": [1, 3, 4, 6, 7, 8, 9, 11, 12], "numpi": [1, 3, 4, 6, 7, 8, 9, 11, 12], "np": [1, 3, 4, 6, 7, 8, 9, 11, 12], "matplotlib": [1, 3, 4, 6, 7, 8, 9, 12], "pyplot": [1, 3, 4, 6, 7, 8, 9, 12], "plt": [1, 3, 4, 6, 7, 8, 9, 11, 12], "gam": [1, 6, 7, 8, 9, 11, 12], "4": [1, 3, 4, 6, 7, 8, 9, 11, 12], "def": [1, 3, 4, 6, 8, 9, 11, 12], "machplot": 1, "ax": [1, 6, 8, 9, 12], "name": 1, "global": [1, 6, 8, 9, 12], "mach": [1, 3, 4, 5, 7, 8, 9, 11, 12], "grid": [1, 3, 4, 7, 11], "set_xlim": [1, 6, 8, 9], "0": [1, 3, 4, 7, 8, 9, 11, 12], "max": 1, "set_xlabel": 1, "set_ylabel": 1, "plot": [1, 3, 6, 7, 8, 9, 11, 12], "mr": 1, "return": [1, 6, 8, 9, 11], "5": [1, 3, 4, 6, 7, 8, 9, 11, 12], "sigma": [1, 7, 11], "fig": [1, 6, 7, 8, 9, 11, 12], "ax0": 1, "ax1": 1, "subplot": 1, "figsiz": [1, 3, 4, 6, 7, 8, 9, 11, 12], "10": [1, 7, 11, 12], "linspac": [1, 3, 6, 7, 8, 9, 11], "05": [1, 3, 7, 11], "100": [1, 6, 7, 8, 9, 11], "abov": 1, "test": [1, 6, 9, 12], "substitut": 1, "content": 1, "With": 1, "tip": 1, "class": 1, "aerokit": [3, 4, 5, 6, 7, 8, 9, 11, 12], "common": [3, 4, 6, 8, 9, 12], "defaultga": [3, 4, 6, 8, 9, 12], "defg": [3, 4], "aero": [3, 4, 6, 7, 8, 9, 11, 12], "Is": [3, 4, 11], "shockwav": [3, 4, 6, 7, 8, 9, 11, 12], "sw": [3, 4, 6, 7, 8, 9, 11, 12], "massflow": [3, 4], "mf": [3, 4], "nz": [3, 4], "inlin": [3, 4, 6, 8, 9, 12], "rcparam": [3, 4, 7], "font": [3, 4, 7], "size": [3, 4, 7, 8, 9, 11], "14": [3, 4, 6, 7, 8, 9, 11, 12], "line": [3, 4, 5, 7, 8, 9, 11, 12], "linewidth": [3, 4, 6, 7, 8, 9, 12], "print": [3, 4, 8, 9, 12], "slide": [3, 4], "24": [3, 4], "new_plot": [3, 4], "xlab": [3, 4], "ylab": [3, 4], "figur": [3, 4, 6, 7, 8, 9, 11, 12], "15": [3, 4, 7, 8, 9, 11], "8": [3, 4, 6, 7, 8, 9, 11, 12], "xlabel": [3, 4, 7, 11, 12], "ylabel": [3, 4, 7, 11, 12], "which": [3, 4, 7, 11, 12], "major": [3, 4, 7, 11], "linestyl": [3, 4, 7, 11], "alpha": [3, 4, 6, 7, 8, 9, 11], "minor": [3, 4, 7, 11], "target_aoac": [3, 4], "6": [3, 4, 7, 8, 9, 11], "length": [3, 4, 6, 8, 9, 12], "set": [3, 6, 8, 9, 12], "A": 3, "ac": 3, "law": 3, "from": [3, 6, 8, 9, 11, 12], "evolut": 3, "ensur": 3, "number": [3, 12], "consist": 3, "As": 3, "noz_x": 3, "200": [3, 7, 9, 11], "endpoint": 3, "true": [3, 6, 8, 9, 12], "ma_max": 3, "mach_sigma": 3, "ma": 3, "sin": [3, 8, 9, 12], "pi": 3, "noz_aoac": 3, "sigma_mach": 3, "x": [3, 6, 8, 9], "r": [3, 6, 8, 9], "a_c": 3, "coord_x": 3, "append": [3, 7, 11], "coordin": 3, "addit": 3, "point": 3, "npr": [3, 4], "msub": [3, 4], "machsub_sigma": [3, 4], "npr0": [3, 4], "pips_mach": [3, 4], "msup": [3, 4], "machsup_sigma": [3, 4], "npr1": [3, 4], "msh": [3, 4], "downstream_mn": [3, 4, 12], "nprsw": [3, 4], "pi_ratio": [3, 4], "ar": [3, 4, 5, 11, 12], "nwith": [3, 4], "respect": [3, 4], "006601275229614": [3, 4], "831391753467699": [3, 4], "63": [3, 4], "12853673524992": [3, 4], "09699610094784036": [3, 4], "45657039307189745": [3, 4], "3": [3, 4, 6, 7, 8, 9, 11, 12], "3678724173613803": [3, 4], "ma_col": 3, "7": [3, 7, 11], "_m": 3, "add": 3, "constant": 3, "_pt": 3, "_p": 3, "line2d": [3, 12], "0x7f08f5a34700": 3, "p_": 3, "ylim": [3, 6, 8, 9, 12], "0x7f08f5dca7c0": 3, "_minit": 3, "initi": [3, 11], "guess": 3, "converg": 3, "0x7f08f8337d30": 3, "thi": [3, 5, 11, 12], "same": 3, "previou": 3, "cell": [3, 8, 9], "repeat": 3, "make": 3, "self": 3, "ptloss": 3, "0x7f08f820c9a0": 3, "po": 3, "paramet": [3, 6, 8, 9, 12], "control": 3, "posit": 3, "analyt": 3, "solut": [3, 8, 9, 11], "ms": 3, "k": [3, 7, 11], "_gamma": 3, "wave": [3, 5, 11, 12], "loss": 3, "upsptream": 3, "mn_pi_ratio": 3, "redefin": 3, "curv": 3, "start": 3, "ish": 3, "index": 3, "closest": 3, "ab": [3, 8, 9], "argmin": 3, "0x7f08f812c3d0": 3, "isentrop": [4, 5, 11], "nozzl": 4, "choke": 4, "subson": 4, "superson": [4, 6, 8, 12], "shock": [4, 5], "exit": 4, "limit": [4, 12], "jupyt": 5, "book": 5, "serv": 5, "comprehens": 5, "collect": 5, "comput": [5, 6, 8, 9, 12], "illustr": 5, "exampl": [5, 12], "analyz": 5, "fluid": 5, "varieti": 5, "scenario": 5, "includ": 5, "both": 5, "regim": 5, "design": 5, "research": 5, "student": 5, "profession": 5, "dynam": 5, "resourc": 5, "focus": 5, "practic": 5, "implement": [5, 11], "techniqu": 5, "rather": 5, "than": 5, "exhaust": 5, "explor": 5, "theoret": 5, "foundat": 5, "while": [5, 8, 9], "present": 5, "here": 5, "provid": 5, "valuabl": 5, "insight": 5, "solv": [5, 8, 9], "relat": 5, "problem": [5, 6, 8, 9, 12], "user": 5, "encourag": 5, "supplement": 5, "learn": 5, "text": [5, 6, 7, 8, 9, 11], "materi": 5, "deeper": 5, "understand": 5, "model": 5, "underli": 5, "aim": 5, "bridg": 5, "gap": 5, "between": [5, 11], "knowledg": 5, "applic": 5, "empow": 5, "reader": 5, "tackl": 5, "real": 5, "world": 5, "challeng": 5, "confid": 5, "most": [5, 8, 9], "directli": [5, 12], "written": 5, "python": 5, "Then": 5, "concis": 5, "effici": 5, "some": 5, "more": 5, "complex": 5, "open": 5, "sourc": 5, "packag": [5, 8, 9], "jgressier": 5, "mass": 5, "forc": 5, "momentum": 5, "flux": 5, "balanc": 5, "energi": 5, "polar": [5, 7], "2d": 5, "weak": 5, "attach": 5, "conic": 5, "math": [6, 12], "scipi": [6, 8, 9], "optim": [6, 8, 9], "scopt": [6, 8, 9], "degre": [6, 7, 8, 9, 11, 12], "deg": [6, 7, 8, 9, 11, 12], "trigo": [6, 8, 9, 12], "unit": [6, 8, 9, 12], "support": [6, 8, 9, 12], "sup": [6, 8, 9], "rc": [6, 8, 9], "usetex": [6, 8, 9], "sty_carac": [6, 8, 9], "color": [6, 8, 9, 12], "orang": [6, 8, 9], "sty_wal": [6, 8, 9], "black": [6, 8, 9, 12], "sty_flow": [6, 8, 9], "green": [6, 8, 9], "sty_text": [6, 8, 9], "fontsiz": [6, 7, 8, 9, 11, 12], "On": [6, 8, 9], "d\u00e9finit": [6, 8, 9], "tout": [6, 8, 9], "d": [6, 8, 9], "abord": [6, 8, 9], "le": [6, 8, 9], "param\u00e8tr": [6, 8, 9], "de": [6, 12], "ce": [6, 8, 9], "ca": [6, 8, 9], "il": [6, 8, 9], "sont": [6, 8, 9], "d\u00e9fini": [6, 8, 9], "comm": [6, 8, 9], "variabl": [6, 8, 9, 12], "que": [6, 8, 9], "l": [6, 8, 9], "peut": [6, 8, 9], "utilis": [6, 8, 9], "direct": [6, 8, 9, 11], "dan": [6, 8, 9], "fonction": [6, 8, 9, 12], "par": [6, 8, 9], "exempl": [6, 8, 9], "definit": [6, 8, 9, 11, 12], "set_gamma": [6, 8, 9, 12], "m0": [6, 8, 9, 12], "xmax": [6, 8, 9], "xmin": [6, 8, 9], "ymin": [6, 8, 9], "ymax": [6, 8, 9], "geometri": [6, 8, 9, 12], "ywall": [6, 8, 9], "exp": [6, 9], "wall_angl": [6, 8, 9], "ep": [6, 8, 9], "1e": [6, 8, 9], "atan": [6, 7, 8, 9, 11], "zoom": [6, 8, 9, 12], "facecolor": [6, 7, 8, 9, 11], "white": [6, 7, 8, 9, 11], "add_subplot": [6, 8, 9, 12], "111": [6, 8, 9, 12], "axi": [6, 7, 8, 9, 11, 12], "xneg": [6, 8, 9, 12], "aspect": [6, 8, 9, 12], "equal": [6, 8, 9, 12], "off": [6, 8, 9], "set_facecolor": [6, 8, 9], "depend": [6, 8, 9, 11], "backend": [6, 8, 9], "xlim": [6, 8, 9, 12], "set_ylim": [6, 8, 9], "plot_geom": [6, 8, 9, 12], "101": [6, 8, 9], "fill": [6, 8, 9], "concaten": [6, 8, 9], "lightgrai": [6, 8, 9], "zorder": [6, 8, 9], "m_0": [6, 8, 9, 11], "format": [6, 8, 9, 12], "backgroundcolor": [6, 8, 9], "tight_layout": [6, 8, 9], "la": [6, 8, 9, 12], "trac\u00e9": [6, 8, 9, 12], "dpi": 7, "150": 7, "updat": 7, "npoint": [7, 11], "16": [7, 8, 9, 11], "12": [7, 8, 9, 11, 12], "suptitl": [7, 11, 12], "1f": [7, 11, 12], "y": [7, 8, 9, 11, 12], "90": [7, 11], "macharrai": [7, 11], "25": [7, 11], "9": [7, 8, 9, 11], "sig": [7, 11], "asin": [7, 8, 9, 11], "sigma_son": [7, 11], "dev": [7, 11, 12], "conical_deflection_mach_sigma": 7, "s": [7, 11], "ilab": [7, 11], "int": [7, 8, 9, 11], "figratio": [7, 11], "ang": [7, 8, 9, 11], "3g": [7, 11], "horizontalalign": [7, 11], "verticalalign": [7, 11], "top": [7, 11, 12], "bbox": [7, 11], "dict": [7, 11], "edgecolor": [7, 11], "grei": [7, 11], "rotat": [7, 11], "logspac": [7, 11], "log10": [7, 11], "01": [7, 11], "50": [7, 11, 12], "base": [7, 11], "maximum": [7, 11, 12], "deviat": [7, 11, 12], "sigma_devmax": [7, 11], "sonic": [7, 11, 12], "b": [7, 9, 11], "label": [7, 11], "legend": [7, 11], "i": [7, 8, 9, 11], "t": [7, 11], "result": [7, 8, 9, 11], "time": [7, 11], "loc": [7, 11], "upper": [7, 11], "prop": [7, 8, 9, 11], "delta": [7, 11], "theta": [7, 11], "angl": [7, 11, 12], "minorticks_on": [7, 11], "flow": [8, 12], "om0": [8, 9], "prandtlmeyer_mach": [8, 9], "mu0": [8, 9], "mach_wal": [8, 9], "mach_prandtlmey": [8, 9], "mw": [8, 9], "e": [8, 9], "th": [8, 9], "th0": [8, 9], "om1": [8, 9], "th1": [8, 9], "thpmu": [8, 9], "slope": [8, 9], "tan": [8, 9, 11, 12], "intersect": [8, 9], "wall": [8, 9, 12], "xwall": [8, 9], "fsolv": [8, 9], "lambda": [8, 9], "xw": [8, 9], "plot_cp_wal": [8, 9], "plot_cp": [8, 9], "n": [8, 9, 12], "51": [8, 9], "fill_expans": [8, 9], "caract\u00e9ristiqu": [8, 9], "wang1": [8, 9], "mu1": [8, 9], "wang0": [8, 9], "flow_prop": [8, 9], "mu": [8, 9], "integ": [8, 9], "ctype": [8, 9], "smin": [8, 9], "smax": [8, 9], "npt": [8, 9], "step": [8, 9], "x0": [8, 9], "y0": [8, 9], "ds": [8, 9], "co": [8, 9], "trajx": [8, 9], "zero": [8, 9, 11], "traji": [8, 9], "nforw": [8, 9], "nback": [8, 9], "sx": [8, 9], "sy": [8, 9], "backward": [8, 9], "rang": [8, 9], "px": [8, 9], "py": [8, 9], "rk2": [8, 9], "predictor": [8, 9], "final": [8, 9], "forward": [8, 9], "plot_cm": [8, 9], "31": [8, 9], "xcm": [8, 9], "ycm": [8, 9], "ctx": [8, 9], "cty": [8, 9], "20": [8, 12], "keyboardinterrupt": [8, 9], "traceback": [8, 9], "recent": [8, 9], "call": [8, 9], "last": [8, 9], "19": 8, "17": [8, 9], "18": [8, 9, 12], "21": 8, "32": [8, 9, 12], "30": 8, "33": [8, 9], "34": [8, 9], "file": [8, 9], "work": [8, 9], "venv": [8, 9], "lib": [8, 9], "python3": [8, 9], "site": [8, 9], "68": [8, 9], "omega": [8, 9], "65": [8, 9], "67": [8, 9], "iterativesolv": [8, 9], "secant_solv": [8, 9], "omega_of_mach": [8, 9], "newton": [8, 9, 11], "69": [8, 9], "els": [8, 9], "item": [8, 9], "_zeros_pi": [8, 9], "357": [8, 9], "func": [8, 9], "fprime": [8, 9], "arg": [8, 9], "tol": [8, 9], "maxit": [8, 9], "fprime2": [8, 9], "x1": [8, 9], "rtol": [8, 9], "full_output": [8, 9], "disp": [8, 9], "355": 8, "p": [8, 9, 11], "q0": [8, 9], "q1": [8, 9], "p1": [8, 9, 12], "p0": [8, 9, 12], "356": [8, 9], "358": [8, 9], "isclos": [8, 9], "atol": [8, 9], "359": [8, 9], "_results_select": [8, 9], "360": [8, 9], "funcal": [8, 9], "itr": [8, 9], "_econverg": [8, 9], "13": 9, "35": 9, "361": 9, "__array_function__": 9, "intern": 9, "kwarg": 9, "core": 9, "numer": 9, "2380": 9, "equal_nan": 9, "2378": 9, "yfin": 9, "isfinit": 9, "2379": 9, "all": 9, "xfin": 9, "within_tol": 9, "2381": 9, "2382": 9, "finit": 9, "2361": 9, "local": 9, "2359": 9, "2360": 9, "errstat": 9, "invalid": 9, "ignor": 9, "_no_nep50_warn": 9, "less_equ": 9, "we": [11, 12], "first": 11, "propos": 11, "1d": 11, "jump": 11, "upstream": [11, 12], "ordinari": 11, "machin": 11, "check": 11, "tabl": 11, "refer": 11, "obtain": 11, "rho_1": 11, "rho_0": 11, "m_": 11, "n0": 11, "qquad": 11, "p_1": 11, "p_0": 11, "n1": 11, "rho_ratio_from_mn": 11, "mn": 11, "ps_ratio_from_mn": 11, "mn1_from_mn": 11, "idempot": 11, "now": 11, "calcul": 11, "either": 11, "see": 11, "procedur": 11, "iter": 11, "There": 11, "To": 11, "method": 11, "you": 11, "must": 11, "f": 11, "look": 11, "process": 11, "signific": 11, "improv": 11, "mu_0": 11, "downstream": [11, 12], "characterist": 11, "mu_1": 11, "also": 11, "minimum": 11, "know": 11, "estim": 11, "deflection_mach_sigma": 11, "case": 12, "thei": 12, "wdev": 12, "upwstream": 12, "devmax": 12, "dev_max": 12, "devson": 12, "dev_son": 12, "For": 12, "59": 12, "sig1": 12, "sigma_mach_deflect": 12, "mn0": 12, "p1p0": 12, "ps_ratio": 12, "mn1": 12, "m1": 12, "ndownstream": 12, "ncompress": 12, "ratio": 12, "37": 12, "961": 12, "compress": 12, "168": 12, "sig2": 12, "p2p1": 12, "mn2": 12, "m2": 12, "reflexion": 12, "p2": 12, "p2p0": 12, "96": 12, "274": 12, "54": 12, "yend": 12, "75": 12, "draw": 12, "xup": 12, "impact": 12, "xbot": 12, "abscissa": 12, "red": 12, "0x7f4e0420d9a0": 12, "shockpolar": 12, "swplt": 12, "figure_theta_pressur": 12, "93": 12, "static": 12, "pressur": 12, "yscale": 12, "linear": 12, "default": 12, "logarithm": 12, "plot_theta_pressur": 12, "thet_init": 12, "p_init": 12, "symbol": 12, "region": 12, "bo": 12, "go": 12, "0x7f4e04167730": 12}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"energi": 0, "conserv": [0, 1, 5], "mass": 1, "flow": [1, 3, 4, 5, 6, 9], "variat": 1, "section": 1, "here": 1, "s": 1, "your": 1, "admonit": 1, "thi": 1, "wa": 1, "style": 1, "multipl": 1, "solut": 1, "forc": 2, "momentum": 2, "flux": 2, "balanc": 2, "detail": 3, "regim": [3, 4], "comput": 3, "limit": 3, "isentrop": [3, 6, 8], "subson": 3, "choke": 3, "superson": [3, 5, 9], "nozzl": 3, "normal": 3, "shock": [3, 7, 10, 11, 12], "exit": 3, "diffus": 3, "method": 5, "incompress": 5, "compress": [5, 8], "law": 5, "intern": 5, "mach": 6, "line": 6, "2d": [6, 10, 12], "conic": 7, "wave": 7, "expans": 8, "faisceau": [8, 9], "de": [8, 9], "d\u00e9tent": [8, 9], "integr": [8, 9], "trajectoir": [8, 9], "et": [8, 9], "c": [8, 9], "progress": 8, "over": 9, "bump": 9, "weak": 10, "attach": 10, "polar": [11, 12], "rankin": 11, "hugoniot": 11, "equat": 11, "reflect": 12, "initi": 12, "first": 12, "represent": 12, "curv": 12}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})